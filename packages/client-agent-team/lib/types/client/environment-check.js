import { useSyncExternalStore } from 'react';
const INITIAL = { status: 'loading' };
export class TeamEnvironmentCheck {
    snapshot = INITIAL;
    listeners = new Set();
    reading;
    loader;
    constructor(loader) {
        this.loader = loader;
    }
    getSnapshot = () => this.snapshot;
    /**
     * Observe the check, starting the first read when nobody has read yet.
     * @param listener - invoked after every snapshot replacement.
     * @returns the disposer removing this listener.
     */
    subscribe = (listener) => {
        this.listeners.add(listener);
        if (this.snapshot.status === 'loading' && this.reading === undefined)
            void this.refresh();
        return () => { this.listeners.delete(listener); };
    };
    /**
     * Read the Host projection. Concurrent callers share one round trip, and a
     * failed read keeps the last accepted report — the block never blanks out
     * over a background read.
     * @returns settlement of this read (or of the read already in flight).
     */
    refresh() {
        if (this.reading !== undefined)
            return this.reading;
        const reading = this.read().finally(() => {
            if (this.reading === reading)
                this.reading = undefined;
        });
        this.reading = reading;
        return reading;
    }
    dispose() {
        this.listeners.clear();
    }
    async read() {
        let report;
        try {
            const result = await this.loader.loadEnvironment();
            if (!result.ok) {
                this.fail();
                return;
            }
            report = result.value;
        }
        catch {
            // A dropped connection surfaces as a thrown carrier error, not a result:
            // both are read failures and both keep whatever report already stands.
            this.fail();
            return;
        }
        this.commit({ status: 'ready', report });
    }
    /**
     * Settle a read that produced no report, so a reader stops waiting on a
     * `loading` that will never finish. A report that already stands is left
     * untouched: a failed background read never blanks the block.
     */
    fail() {
        if (this.snapshot.report === undefined)
            this.commit({ status: 'ready' });
    }
    commit(snapshot) {
        this.snapshot = snapshot;
        for (const listener of this.listeners)
            listener();
    }
}
/** Subscribe one rendered block to the environment check. */
export function useEnvironmentCheck(environment) {
    return useSyncExternalStore(environment.subscribe, environment.getSnapshot, environment.getSnapshot);
}

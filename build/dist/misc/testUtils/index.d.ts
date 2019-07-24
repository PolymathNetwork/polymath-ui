export * from './factories';
interface MockEthereumBrowserArgs {
    support?: 'legacy' | 'modern';
    options?: {
        networkId: number;
        loaded: boolean;
    };
}
export declare function mockEthereumBrowser({ support, options, }: MockEthereumBrowserArgs): {
    restore: () => void;
    load: () => void;
};
//# sourceMappingURL=index.d.ts.map
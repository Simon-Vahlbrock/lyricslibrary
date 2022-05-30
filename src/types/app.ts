export enum Theme {
    light,
    dark
}

export type SearchFilterNames = 'all' | 'songs' | 'artists';

export type Tapp = 'related' | 'search' | 'settings' | 'donated' | 'other';

export interface SearchFilter {
    id: number;
    type: SearchFilterNames;
    isSelected: boolean;
}

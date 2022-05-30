export enum Theme {
    light,
    dark
}

export type SearchFilterNames = 'all' | 'songs' | 'artists' | 'favourites';

export type Tapp = 'related' | 'search' | 'settings' | 'donated' | 'other';

export interface SearchFilter {
    id: number;
    type: SearchFilterNames;
    isSelected: boolean;
}

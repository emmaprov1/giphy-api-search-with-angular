
export interface GifSearchValues {
  images: {
    fixed_width: {
      url: string;
    };
  };
  title: string;
  id: string;
}

export interface GifSearchResult {
  data: Array<GifSearchValues>;
  pagination: {
    count: number;
    offset: number;
  };
}

export interface GifSearchReq {
  searchText: string;
  offset: number;
  pageSize: number;
}

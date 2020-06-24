declare module "HomeType" {
  export type HomeType = {
    id: string;
    type: string;
    pageRecommended: Array<CategoryType>;
    categoryList: Array<CategoryListType>;
  };

  export type CategoryListType = {
    id: string;
    title: string;
    list: Array<CategoryType>;
  };

  export type CategoryType = {
    id: string;
    title: string;
    duration: string;
    tags: Array<string>;
    bannerUrl: string;
    titleUrl: string;
    match: string;
    year: number;
    grade: string;
    summary: string;
    starring: Array<string>;
    category: Array<string>;
    trailerUrl: string;
    trailerPoster: string;
  };
}

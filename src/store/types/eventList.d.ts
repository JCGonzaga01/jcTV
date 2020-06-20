declare module "EventListType" {
  export type EventListType = {
    id: string;
    date: {
      from: string;
      to?: string;
    };
    name: string;
    location: string;
    bannerImg: string;
  };

  export type EventCategoryType = {
    upcomingEvents: Array<EventListType>;
    pastEvents: Array<EventListType>;
  };
}

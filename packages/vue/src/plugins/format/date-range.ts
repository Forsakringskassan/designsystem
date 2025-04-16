import { FDate } from "@fkui/date";

export type DateRange =
    | {
          from: string;
          to: string;
      }
    | {
          from: FDate;
          to: FDate;
      };

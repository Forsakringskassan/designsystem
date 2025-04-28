import { FDate } from "@fkui/date";
/**
 * @internal
 */
/* --- cut above --- */
export type DateRange =
    | {
          from: string;
          to: string;
      }
    | {
          from: FDate;
          to: FDate;
      };

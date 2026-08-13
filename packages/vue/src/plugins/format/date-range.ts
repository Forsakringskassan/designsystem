import { type FDate } from "@fkui/date";
/**
 * @internal
 */
/* --- cut above --- */
export type DateRange =
    | {
          from: string;
          to: string;
          format?: "human" | "iso";
      }
    | {
          from: FDate;
          to: FDate;
          format?: "human" | "iso";
      };

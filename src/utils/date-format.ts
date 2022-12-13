import { format } from "date-fns";

function dateFormat(d: Date | string, f: string = "dd MMM yy") {
  return format(new Date(d), f);
}

export default dateFormat;

type UpcomingEventProps = {
  month?: string;
  day?: string;
  time?: string | null;
  summary?: string;
  location?: string | null;
};

export default function UpcomingEvent({
  month,
  day,
  time,
  summary,
  location,
}: UpcomingEventProps) {
  return (
    <li
      className="flex h-22 items-center gap-8 border-b-1 border-gray-200 p-3"
    >
      <div className="text-center">
        {month ? <div className="text-xs text-[var(--subtitle)]">{month}</div> : null}
        {day? <div className="text-2xl">{day}</div> : null}
      </div>

      <div className="min-w-0 space-y-0.5">
        {time ? <div className="text-sm text-[var(--subtitle)]">{time}</div> : null}
        <div className="truncate">{summary ? summary : "No upcoming events."}</div>
        {location ? (
          <div className="flex items-center truncate text-sm text-[var(--subtitle)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="mr-0.5 inline h-5 w-5 fill-red-700"
            >
              <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
            </svg>
            {location}
          </div>
        ) : null}
      </div>
    </li>
  );
}

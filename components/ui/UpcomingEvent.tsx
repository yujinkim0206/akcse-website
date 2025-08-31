type UpcomingEventProps = {
  id: string;
  month: string;
  day: string;
  time?: string | null;
  summary: string;
  location?: string | null;
};

export default function UpcomingEvent({
  id,
  month,
  day,
  time,
  summary,
  location,
}: UpcomingEventProps) {
  return (
    <li
      key={id}
      className="flex h-26 items-center gap-8 rounded-lg border-1 border-gray-200 px-6"
    >
      <div className="text-center">
        <div className="text-xs text-gray-500 uppercase">{month}</div>
        <div className="text-2xl leading-none font-semibold">{day}</div>
      </div>

      <div className="min-w-0 space-y-0.5">
        {time ? <div className="text-sm text-gray-500">{time}</div> : null}
        <div className="truncate font-medium">{summary}</div>
        {location ? (
          <div className="flex items-center truncate text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="mr-0.5 inline h-5 w-5 fill-red-500"
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

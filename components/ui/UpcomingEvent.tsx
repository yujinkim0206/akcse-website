type UpcomingEventProps = {
  month?: string;
  day?: string;
  time?: string | null;
  summary?: string;
  location?: string | null;
  description?: string | null;
};

export default function UpcomingEvent({
  month,
  day,
  time,
  summary,
  location,
  description,
}: UpcomingEventProps) {
  return (
    <li className="listing-card">
      <div className="flex items-center gap-8">
        <div className="text-center">
          {month ? (
            <div className="text-xs text-[var(--subtitle)]">{month}</div>
          ) : null}
          {day ? <div className="text-2xl">{day}</div> : null}
        </div>

        <div className="min-w-0 space-y-0.5">
          {time ? (
            <div className="text-sm text-[var(--subtitle)]">{time}</div>
          ) : null}
          <div className="truncate">{summary}</div>
          {location ? (
            <div className="flex items-center text-sm text-[var(--subtitle)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="mr-0.5 inline h-5 w-5 fill-red-700"
              >
                <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
              </svg>
              <span className="truncate">{location}</span>
            </div>
          ) : null}
        </div>
      </div>

      {description ? (
        <a href={description} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="inline h-7 w-7 -rotate-45 fill-black"
          >
            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
          </svg>
        </a>
      ) : null}
    </li>
  );
}

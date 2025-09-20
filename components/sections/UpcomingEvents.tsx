import UpcomingEvent from "../ui/UpcomingEvent";
import Image from "next/image";
import UpcomingEventsImage from "../ui/UpcomingEventsImage";

export default async function UpcomingEvents() {
  const apiKey = process.env.GOOGLE_API_KEY!;
  const calendarId = process.env.GOOGLE_CALENDAR_ID!;
  const timeMin = new Date().toISOString();

  const url =
    `https://www.googleapis.com/calendar/v3/calendars/` +
    `${encodeURIComponent(calendarId)}/events` +
    `?key=${apiKey}&timeMin=${encodeURIComponent(timeMin)}` +
    `&singleEvents=true&orderBy=startTime&maxResults=10`;

  const res = await fetch(url);
  if (!res.ok) {
    return (
      <section className="wrap section-spacing">
        <div className="upcoming-events">
          <UpcomingEventsImage />
          <div className="upcoming-events-cards">
            <h2 className="section-heading">Upcoming Events</h2>
            <div className="listing-card">Failed to load events</div>
          </div>
        </div>
      </section>
    );
  }

  const data = await res.json();
  const events = data.items ?? [];

  if (events.length === 0) {
    return (
      <section className="wrap section-spacing">
        <div className="upcoming-events">
          <UpcomingEventsImage />
          <div className="upcoming-events-cards">
            <h2 className="section-heading">Upcoming Events</h2>
            <div className="listing-card">No upcoming events.</div>
          </div>
        </div>
      </section>
    );
  }

  function getMonthDay(start: any) {
    let date: Date;
    if (start?.date) {
      date = new Date(start.date + "T00:00:00");
    } else {
      date = new Date(start?.dateTime);
    }
    const month = date.toLocaleString("en-US", {
      month: "short",
      timeZone: "America/Toronto",
    });
    const day = date.toLocaleString("en-US", {
      day: "2-digit",
      timeZone: "America/Toronto",
    });
    return { month, day };
  }

  function getTime(start: any) {
    if (start?.date) return "";
    const date = new Date(start.dateTime);
    const time = date.toLocaleTimeString("en-CA", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Toronto",
    });
    return time;
  }

  const getShortLocation = (location: string) => {
    const parts = location.split(",");
    if (parts.length <= 2) return location;
    return parts.slice(0, -2).join(",").trim();
  };

  return (
    <section className="wrap section-spacing">
      <div className="upcoming-events">
        <UpcomingEventsImage />
        <div className="upcoming-events-cards">
          <h2 className="section-heading">Upcoming Events</h2>
          <ul className="">
            {events.map((event: any) => {
              const { month, day } = getMonthDay(event.start);
              const time = getTime(event.start);
              return (
                <UpcomingEvent
                  key={event.id}
                  month={month}
                  day={day}
                  time={time}
                  summary={event.summary}
                  location={
                    event.location ? getShortLocation(event.location) : null
                  }
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

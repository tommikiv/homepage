import Status from "./Status";

export default function Intro() {
  // Todo:
  // - Dont use "content" because it could apply to anything
  // - Add an image or something visual to the intro section
  return (
    <main className="content">
      <section className="intro-section">
        <div className="intro">
          <h1>
            Focused on visually pleasing experiences while understanding the
            systems behind them.
          </h1>

          <Status />
        </div>
      </section>
    </main>
  );
}

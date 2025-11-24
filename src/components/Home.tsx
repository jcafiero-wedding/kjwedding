function Home() {
  const todaysDate = new Date();
  const weddingDate = new Date('2026-09-12');
  const timeDifference = weddingDate.getTime() - todaysDate.getTime();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Kyle + Jennifer</h1>
        <p>September 12, 2026</p>
        <p>Beach Haven, NJ</p>
        <p>{Math.ceil(timeDifference / (1000 * 60 * 60 * 24))} days until our wedding!</p>
      </div>
    </div>
  );
}

export default Home;
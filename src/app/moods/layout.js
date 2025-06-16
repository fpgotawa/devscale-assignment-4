export default function Layout({ children }) {
  return (
    <div>
      <header>
        <div className="w-[50%] m-auto flex justify-between items-center text-zinc-300">
          <div className="font-black  py-4 text-large">moodTrackers.</div>
          <a href="/" className="font-semibold text-medium">
            Log Out
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}

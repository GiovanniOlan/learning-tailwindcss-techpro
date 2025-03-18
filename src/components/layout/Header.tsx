export default function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <img className="w-100" src="header.png" alt="" />
        <div className="text-center text-white space-y-8">
          <p className="font-lato text-4xl">Sonido Profesional</p>
          <h1 className="">TechPRO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            non iure iste quia earum, dolor repellat inventore iusto atque
            quasi? In quisquam optio beatae facere maiores. Quam dolores ut
            inventore.
          </p>
          <p>
            Desde <span>$299</span>
          </p>
        </div>
      </div>
    </header>
  );
}

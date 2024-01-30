import DashboardHomeScreen from "@/components/ui/pages/dashboard-home-screen";

async function getHeroes() {
  const res = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=84d1bd4d3a025bf80b0d30ad747f85b8&hash=649c4fe1ca33ed38c47a7e08a732fa8a&limit=100')

  if (!res.ok) {
    throw new Error('Failed to fetch data on the Marvel\'s API')
  }

  return res.json()
}

export default async function DashboardHome() {
  const data = await getHeroes();
  const heroes = data.data.results;

  return (
    <section className="w-full">
      <DashboardHomeScreen heroes={heroes} />
    </section>
  );
}

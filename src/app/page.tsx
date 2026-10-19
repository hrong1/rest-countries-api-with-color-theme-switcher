import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar"
import { getCountriesData } from '@/lib/getCountriesData';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <SearchBar />
      </main>
    </div>
  );
}

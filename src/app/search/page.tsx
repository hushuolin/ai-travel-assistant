import TravelSearch from "@/components/TravelSearch";

export default function SearchPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600">Search for Destinations</h2>
      <TravelSearch />
    </div>
  );
}

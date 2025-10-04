import Card from "@/components/common/Card";

const listings = [
  {
    id: "1",
    title: "Apartment in Mombasa",
    location: "Mombasa",
    price: 2953,
    nights: 2,
    rating: 4.94,
    image: "/images/mombasa-apartment.jpg",
    isGuestFavorite: true,
  },
  {
    id: "2",
    title: "Condo in Nyali",
    location: "Nyali",
    price: 6101,
    nights: 2,
    rating: 4.76,
    image: "/images/nyali-condo.jpg",
    isGuestFavorite: false,
  },
];

export default function HomePage() {
  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4">Popular homes in Mombasa</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} {...listing} />
        ))}
      </div>
    </main>
  );
}

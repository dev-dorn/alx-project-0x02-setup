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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {listings.map((listing) => (
        <Card
          key={listing.id}
          title={listing.title}
          content={`Located in ${listing.location}`}
          location={listing.location}
          price={listing.price}
          nights={listing.nights}
          rating={listing.rating}
          image={listing.image}
          isGuestFavorite={listing.isGuestFavorite}
        />
      ))}
    </div>
  );
}

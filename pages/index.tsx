import React from "react";
import Card from "../components/common/Card";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to ALX Listing App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card
          title="Cute Puppy Apartment"
          description="A cozy apartment with a puppy-friendly vibe."
          imageUrl="/assets/puppy.jpg"
          buttonLabel="Book Now"
        />
        <Card
          title="Tower House"
          description="A modern tower-style house with great views."
          imageUrl="/assets/tower-house.jpg"
          buttonLabel="Details"
        />
      </div>
    </main>
  );
}

import Card from "@/components/common/Card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card
        title="My First Property"
        description="This is a test property card built with Next.js + Tailwind."
        imageUrl="/assets/screenshot-2.png"
      />
    </div>
  );
}

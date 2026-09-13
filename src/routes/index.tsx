import { createFileRoute } from "@tanstack/react-router";
import WeddingInvitation from "@/components/wedding/WeddingInvitation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kajal Weds Saurabh | Wedding Invitation 2026" },
      { name: "description", content: "Join us in celebrating the wedding of Kajal Kedia & Saurabh Gupta on 13–14 December 2026 in Darbhanga." },
      { property: "og:title", content: "Kajal Weds Saurabh 💍" },
      { property: "og:description", content: "You're invited to celebrate our wedding." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <WeddingInvitation />;
}

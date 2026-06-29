import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import reviewer1 from "@/assets/reviewer-1.jpg";
import reviewer2 from "@/assets/reviewer-2.jpg";
import reviewer3 from "@/assets/reviewer-3.jpg";
import reviewer4 from "@/assets/reviewer-4.jpg";
import reviewer5 from "@/assets/reviewer-5.jpg";
import reviewer6 from "@/assets/reviewer-6.jpg";
import googleLogo from "@/assets/google-logo.svg";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent service! My phone screen was replaced quickly and professionally. The technician was very knowledgeable and friendly. Highly recommend!",
      image: reviewer1
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      date: "1 month ago",
      text: "Great experience from start to finish. Fast turnaround time and fair pricing. My iPhone works perfectly now. Will definitely use their services again.",
      avatar: "SJ"
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 5,
      date: "3 weeks ago",
      text: "Very professional and efficient service. They fixed my laptop same day and the price was very reasonable. Customer service was outstanding!",
      image: reviewer3
    },
    {
      id: 4,
      name: "Emma Wilson",
      rating: 5,
      date: "1 week ago",
      text: "Best repair shop in Brisbane! They repaired my tablet screen perfectly and it looks brand new. The staff was super helpful and explained everything clearly.",
      avatar: "EW"
    },
    {
      id: 5,
      name: "David Brown",
      rating: 5,
      date: "2 months ago",
      text: "Outstanding service! Quick diagnosis, quality parts, and excellent workmanship. My phone was fixed in less than an hour. Couldn't be happier!",
      image: reviewer5
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 5,
      date: "3 weeks ago",
      text: "Fantastic service! They rescued all my data from a water-damaged phone. Very professional team and great customer care. Highly recommended!",
      image: reviewer6
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "fill-[hsl(var(--ccr-accent))] text-[hsl(var(--ccr-accent))]"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <img src={googleLogo} alt="Google" className="w-10 h-10" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from real customers on Google
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="font-semibold">4.9 rating</span>
            <span className="text-muted-foreground">• 1500+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                {/* Reviewer Info */}
                <div className="flex items-start gap-3 mb-4">
                  {review.image ? (
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--ccr-primary))] text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {review.avatar}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                      <img src={googleLogo} alt="Posted on Google" className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-3">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-foreground/90">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Link */}
        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/pBP8yWz"
            target="_top"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[hsl(var(--ccr-primary))] hover:text-[hsl(var(--ccr-secondary))] font-semibold transition-colors"
          >
            Read all reviews on Google
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

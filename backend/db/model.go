package db

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Category struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	Name        string             `bson:"name"`                  // Name of the category
	Description string             `bson:"description,omitempty"` // Optional: Description of the category
	Icon        string             `bson:"icon,omitempty"`        // Optional: Icon URL or reference
	CreatedAt   time.Time          `bson:"createdAt"`             // Creation timestamp
	UpdatedAt   time.Time          `bson:"updatedAt"`             // Last updated timestamp
}

type Link struct {
	ID         primitive.ObjectID `bson:"_id,omitempty"`
	Name       string             `bson:"name"`               // Name of the link
	URL        string             `bson:"url"`                // URL of the link
	Icon       string             `bson:"icon,omitempty"`     // Optional: Icon URL or reference
	CategoryID primitive.ObjectID `bson:"categoryId"`         // Foreign key reference to Category
	Priority   int                `bson:"priority,omitempty"` // Optional: Sorting priority within a category
	CreatedAt  time.Time          `bson:"createdAt"`          // Creation timestamp
	UpdatedAt  time.Time          `bson:"updatedAt"`          // Last updated timestamp
}

type Advertisement struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	Title     string             `bson:"title"`              // Title of the advertisement
	ImageURL  string             `bson:"imageUrl"`           // URL or reference to the ad image
	TargetURL string             `bson:"targetUrl"`          // URL the ad points to
	Placement string             `bson:"placement"`          // Placement position (e.g., sidebar, footer)
	Priority  int                `bson:"priority,omitempty"` // Priority for displaying the ad
	CreatedAt time.Time          `bson:"createdAt"`          // Creation timestamp
	UpdatedAt time.Time          `bson:"updatedAt"`          // Last updated timestamp
}

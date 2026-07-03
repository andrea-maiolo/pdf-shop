interface PhotoCard {
  prod: Record<string, any>;
}

const ProductCard = function ({ prod }: PhotoCard) {
  const imageUrl = prod.urls?.regular;
  const altText = prod.alt_description || "Unsplash Photo";
  const photographerName = prod.user?.name || "Unknown Photographer";
  const photographerUsername = prod.user?.username;

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "12px", margin: "10px", maxWidth: "300px" }}>
      <img src={imageUrl} alt={altText} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }} />
      <div style={{ marginTop: "8px", fontSize: "14px" }}>
        <p>
          📷 <strong>By:</strong> {photographerName}
        </p>

        {photographerUsername && (
          <a
            href={`https://unsplash.com/@${photographerUsername}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0070f3", textDecoration: "none", fontSize: "12px" }}
          >
            View Unsplash Profile
          </a>
        )}
      </div>
    </div>
  );
};
export default ProductCard;

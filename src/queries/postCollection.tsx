export const query = `{
    postCollection {
      items {
        sys {
          firstPublishedAt
        }
        title
        ingredients
        recipe {
          json
        }
        image {
          url
          title
          width
          height
          description
        }
      }
    }
  }`
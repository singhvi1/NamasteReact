export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_medium.jpg";

export const USER_AVATAR = "https://net2025.cc/img/user-account2.png";

export const API_URL =
  "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&series_granularity=show&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&show_type=movie";
export const HORRORMOVIE_API =
  "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&series_granularity=show&genres=horror&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&show_type=movie";

export const POPULARMOVIES_API =
  "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&series_granularity=show&order_direction=asc&order_by=popularity_1year&genres_relation=and&output_language=en&show_type=movie";

export const SCI_FI_API =
  "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&genres=SciFi&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&show_type=movie";
export const ANIMATOIN_MOVIES_API =
  "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&genres=Animation&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&show_type=movie";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9b3957246bmsh4ab054e3e02deadp12ecfajsn64d4535534e7",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
};
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];


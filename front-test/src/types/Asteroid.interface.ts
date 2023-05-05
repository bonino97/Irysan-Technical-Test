export interface Asteroid {
  id: string;
  name: string;
  estimated_diameter: {
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  nasa_jpl_url: string;
  close_approach_data: {
    close_approach_date: string;
    relative_velocity: {
      kilometers_per_second: string;
      kilometers_per_hour: string;
    };
    miss_distance: {
      kilometers: string;
    };
  }[];
}

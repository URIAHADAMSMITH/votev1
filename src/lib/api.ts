import axios from 'axios';

// Types
export interface Poll {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  zoom: number;
  options?: PollOption[];
}

export interface PollOption {
  id: number;
  text: string;
  votes: number;
}

// In a real app, this would call your backend API
export async function fetchPolls(bounds: any, zoom: number): Promise<Poll[]> {
  try {
    // Example API call - replace with your actual endpoint
    // const response = await axios.get('/api/polls', {
    //   params: {
    //     north: bounds.getNorth(),
    //     south: bounds.getSouth(),
    //     east: bounds.getEast(),
    //     west: bounds.getWest(),
    //     zoom
    //   }
    // });
    // return response.data;
    
    // For now, return mock data
    return [
      { id: 1, title: 'Global Climate Action', description: 'Should countries commit to net-zero emissions by 2050?', lat: 0, lng: 0, zoom: 2 },
      { id: 2, title: 'US Healthcare Reform', description: 'Do you support universal healthcare in the United States?', lat: 39.8, lng: -98.5, zoom: 4 },
      { id: 3, title: 'EU Digital Policies', description: 'Should the EU strengthen data privacy regulations?', lat: 50.8, lng: 10.4, zoom: 4 },
      { id: 4, title: 'New York Transit Funding', description: 'Should NYC increase funding for public transportation?', lat: 40.7, lng: -74.0, zoom: 10 },
    ].filter(poll => zoom >= poll.zoom - 2);
  } catch (error) {
    console.error('Error fetching polls:', error);
    return [];
  }
}

export async function submitVote(pollId: number, optionId: number): Promise<boolean> {
  try {
    // Example API call - replace with your actual endpoint
    // await axios.post('/api/votes', {
    //   pollId,
    //   optionId
    // });
    
    console.log(`Submitting vote for poll ${pollId}, option ${optionId}`);
    return true;
  } catch (error) {
    console.error('Error submitting vote:', error);
    return false;
  }
} 
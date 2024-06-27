import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SpotifyTrack, SpotifyTrackDocument } from './spotify-track.schema';

@Injectable()
export class SpotifyService {
  private readonly apiUrl = 'https://api.spotify.com/v1';
  private readonly token = 'YOUR_SPOTIFY_API_TOKEN'; // Substitua pelo seu token de acesso do Spotify

  constructor(
    private httpService: HttpService,
    @InjectModel(SpotifyTrack.name) private spotifyTrackModel: Model<SpotifyTrackDocument>
  ) {}

  getTrack(id: string) {
    return this.httpService
      .get(`${this.apiUrl}/tracks/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .pipe(map(response => response.data));
  }

  async saveTrack(trackData: any): Promise<SpotifyTrack> {
    const track = new this.spotifyTrackModel({
      spotifyId: trackData.id,
      name: trackData.name,
      artist: trackData.artists[0].name,
      album: trackData.album.name,
      duration_ms: trackData.duration_ms,
    });
    return track.save();
  }
}

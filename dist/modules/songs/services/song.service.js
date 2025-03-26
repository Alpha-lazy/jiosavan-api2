import { CreateSongStationUseCase, GetSongByIdUseCase, GetSongByLinkUseCase, GetSongLyricsUseCase, GetSongSuggestionsUseCase } from '../../songs/use-cases/index.js';
export class SongService {
    getSongByIdUseCase;
    getSongByLinkUseCase;
    getSongLyricsUseCase;
    createSongStationUseCase;
    getSongSuggestionsUseCase;
    constructor() {
        this.getSongByIdUseCase = new GetSongByIdUseCase();
        this.getSongByLinkUseCase = new GetSongByLinkUseCase();
        this.getSongLyricsUseCase = new GetSongLyricsUseCase();
        this.createSongStationUseCase = new CreateSongStationUseCase();
        this.getSongSuggestionsUseCase = new GetSongSuggestionsUseCase();
    }
    getSongByIds = (args) => {
        return this.getSongByIdUseCase.execute(args);
    };
    getSongByLink = (token) => {
        return this.getSongByLinkUseCase.execute(token);
    };
    getSongLyrics = (songId) => {
        return this.getSongLyricsUseCase.execute(songId);
    };
    createSongStation = (songIds) => {
        return this.createSongStationUseCase.execute(songIds);
    };
    getSongSuggestions = (args) => {
        return this.getSongSuggestionsUseCase.execute(args);
    };
}

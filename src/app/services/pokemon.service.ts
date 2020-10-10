import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Pokemon[] = [
    {
      id: 1,
      name: 'フシギダネ',
      type: ['Grass', 'Poison'],
    },
    {
      id: 2,
      name: 'フシギソウ',
      type: ['Grass', 'Poison'],
    },
    {
      id: 3,
      name: 'フシギバナ',
      type: ['Grass', 'Poison'],
    },
    {
      id: 4,
      name: 'ヒトカゲ',
      type: ['Fire'],
    },
    {
      id: 5,
      name: 'リザード',
      type: ['Fire'],
    },
    {
      id: 6,
      name: 'リザードン',
      type: ['Fire', 'Flying'],
    },
    {
      id: 7,
      name: 'ゼニガメ',
      type: ['Water'],
    },
    {
      id: 8,
      name: 'カメール',
      type: ['Water'],
    },
    {
      id: 9,
      name: 'カメックス',
      type: ['Water'],
    },
    {
      id: 10,
      name: 'キャタピー',
      type: ['Bug'],
    },
    {
      id: 11,
      name: 'トランセル',
      type: ['Bug'],
    },
    {
      id: 12,
      name: 'バタフリー',
      type: ['Bug', 'Flying'],
    },
    {
      id: 13,
      name: 'ビードル',
      type: ['Bug', 'Poison'],
    },
    {
      id: 14,
      name: 'コクーン',
      type: ['Bug', 'Poison'],
    },
    {
      id: 15,
      name: 'スピアー',
      type: ['Bug', 'Poison'],
    },
    {
      id: 16,
      name: 'ポッポ',
      type: ['Normal', 'Flying'],
    },
    {
      id: 17,
      name: 'ピジョン',
      type: ['Normal', 'Flying'],
    },
    {
      id: 18,
      name: 'ピジョット',
      type: ['Normal', 'Flying'],
    },
    {
      id: 19,
      name: 'コラッタ',
      type: ['Normal'],
    },
    {
      id: 20,
      name: 'ラッタ',
      type: ['Normal'],
    },
    {
      id: 21,
      name: 'オニスズメ',
      type: ['Normal', 'Flying'],
    },
    {
      id: 22,
      name: 'オニドリル',
      type: ['Normal', 'Flying'],
    },
    {
      id: 23,
      name: 'アーボ',
      type: ['Poison'],
    },
    {
      id: 24,
      name: 'アーボック',
      type: ['Poison'],
    },
    {
      id: 25,
      name: 'ピカチュウ',
      type: ['Electric'],
    },
    {
      id: 26,
      name: 'ライチュウ',
      type: ['Electric'],
    },
    {
      id: 27,
      name: 'サンド',
      type: ['Ground'],
    },
    {
      id: 28,
      name: 'サンドパン',
      type: ['Ground'],
    },
    {
      id: 29,
      name: 'ニドラン♀',
      type: ['Poison'],
    },
    {
      id: 30,
      name: 'ニドリーナ',
      type: ['Poison'],
    },
    {
      id: 31,
      name: 'ニドクイン',
      type: ['Poison', 'Ground'],
    },
    {
      id: 32,
      name: 'ニドラン♂',
      type: ['Poison'],
    },
    {
      id: 33,
      name: 'ニドリーノ',
      type: ['Poison'],
    },
    {
      id: 34,
      name: 'ニドキング',
      type: ['Poison', 'Ground'],
    },
    {
      id: 35,
      name: 'ピッピ',
      type: ['Fairy'],
    },
    {
      id: 36,
      name: 'ピクシー',
      type: ['Fairy'],
    },
    {
      id: 37,
      name: 'ロコン',
      type: ['Fire'],
    },
    {
      id: 38,
      name: 'キュウコン',
      type: ['Fire'],
    },
    {
      id: 39,
      name: 'プリン',
      type: ['Normal', 'Fairy'],
    },
    {
      id: 40,
      name: 'プクリン',
      type: ['Normal', 'Fairy'],
    },
    {
      id: 41,
      name: 'ズバット',
      type: ['Poison', 'Flying'],
    },
    {
      id: 42,
      name: 'ゴルバット',
      type: ['Poison', 'Flying'],
    },
    {
      id: 43,
      name: 'ナゾノクサ',
      type: ['Grass', 'Poison'],
    },
    {
      id: 44,
      name: 'クサイハナ',
      type: ['Grass', 'Poison'],
    },
    {
      id: 45,
      name: 'ラフレシア',
      type: ['Grass', 'Poison'],
    },
    {
      id: 46,
      name: 'パラス',
      type: ['Bug', 'Grass'],
    },
    {
      id: 47,
      name: 'パラセクト',
      type: ['Bug', 'Grass'],
    },
    {
      id: 48,
      name: 'コンパン',
      type: ['Bug', 'Poison'],
    },
    {
      id: 49,
      name: 'モルフォン',
      type: ['Bug', 'Poison'],
    },
    {
      id: 50,
      name: 'ディグダ',
      type: ['Ground'],
    },
    {
      id: 51,
      name: 'ダグトリオ',
      type: ['Ground'],
    },
    {
      id: 52,
      name: 'ニャース',
      type: ['Normal'],
    },
    {
      id: 53,
      name: 'ペルシアン',
      type: ['Normal'],
    },
    {
      id: 54,
      name: 'コダック',
      type: ['Water'],
    },
    {
      id: 55,
      name: 'ゴルダック',
      type: ['Water'],
    },
    {
      id: 56,
      name: 'マンキー',
      type: ['Fighting'],
    },
    {
      id: 57,
      name: 'オコリザル',
      type: ['Fighting'],
    },
    {
      id: 58,
      name: 'ガーディ',
      type: ['Fire'],
    },
    {
      id: 59,
      name: 'ウインディ',
      type: ['Fire'],
    },
    {
      id: 60,
      name: 'ニョロモ',
      type: ['Water'],
    },
    {
      id: 61,
      name: 'ニョロゾ',
      type: ['Water'],
    },
    {
      id: 62,
      name: 'ニョロボン',
      type: ['Water', 'Fighting'],
    },
    {
      id: 63,
      name: 'ケーシィ',
      type: ['Psychic'],
    },
    {
      id: 64,
      name: 'ユンゲラー',
      type: ['Psychic'],
    },
    {
      id: 65,
      name: 'フーディン',
      type: ['Psychic'],
    },
    {
      id: 66,
      name: 'ワンリキー',
      type: ['Fighting'],
    },
    {
      id: 67,
      name: 'ゴーリキー',
      type: ['Fighting'],
    },
    {
      id: 68,
      name: 'カイリキー',
      type: ['Fighting'],
    },
    {
      id: 69,
      name: 'マダツボミ',
      type: ['Grass', 'Poison'],
    },
    {
      id: 70,
      name: 'ウツドン',
      type: ['Grass', 'Poison'],
    },
    {
      id: 71,
      name: 'ウツボット',
      type: ['Grass', 'Poison'],
    },
    {
      id: 72,
      name: 'メノクラゲ',
      type: ['Water', 'Poison'],
    },
    {
      id: 73,
      name: 'ドククラゲ',
      type: ['Water', 'Poison'],
    },
    {
      id: 74,
      name: 'イシツブテ',
      type: ['Rock', 'Ground'],
    },
    {
      id: 75,
      name: 'ゴローン',
      type: ['Rock', 'Ground'],
    },
    {
      id: 76,
      name: 'ゴローニャ',
      type: ['Rock', 'Ground'],
    },
    {
      id: 77,
      name: 'ポニータ',
      type: ['Fire'],
    },
    {
      id: 78,
      name: 'ギャロップ',
      type: ['Fire'],
    },
    {
      id: 79,
      name: 'ヤドン',
      type: ['Water', 'Psychic'],
    },
    {
      id: 80,
      name: 'ヤドラン',
      type: ['Water', 'Psychic'],
    },
    {
      id: 81,
      name: 'コイル',
      type: ['Electric', 'Steel'],
    },
    {
      id: 82,
      name: 'レアコイル',
      type: ['Electric', 'Steel'],
    },
    {
      id: 83,
      name: 'カモネギ',
      type: ['Normal', 'Flying'],
    },
    {
      id: 84,
      name: 'ドードー',
      type: ['Normal', 'Flying'],
    },
    {
      id: 85,
      name: 'ドードリオ',
      type: ['Normal', 'Flying'],
    },
    {
      id: 86,
      name: 'パウワウ',
      type: ['Water'],
    },
    {
      id: 87,
      name: 'ジュゴン',
      type: ['Water', 'Ice'],
    },
    {
      id: 88,
      name: 'ベトベター',
      type: ['Poison'],
    },
    {
      id: 89,
      name: 'ベトベトン',
      type: ['Poison'],
    },
    {
      id: 90,
      name: 'シェルダー',
      type: ['Water'],
    },
    {
      id: 91,
      name: 'パルシェン',
      type: ['Water', 'Ice'],
    },
    {
      id: 92,
      name: 'ゴース',
      type: ['Ghost', 'Poison'],
    },
    {
      id: 93,
      name: 'ゴースト',
      type: ['Ghost', 'Poison'],
    },
    {
      id: 94,
      name: 'ゲンガー',
      type: ['Ghost', 'Poison'],
    },
    {
      id: 95,
      name: 'イワーク',
      type: ['Rock', 'Ground'],
    },
    {
      id: 96,
      name: 'スリープ',
      type: ['Psychic'],
    },
    {
      id: 97,
      name: 'スリーパー',
      type: ['Psychic'],
    },
    {
      id: 98,
      name: 'クラブ',
      type: ['Water'],
    },
    {
      id: 99,
      name: 'キングラー',
      type: ['Water'],
    },
    {
      id: 100,
      name: 'ビリリダマ',
      type: ['Electric'],
    },
    {
      id: 101,
      name: 'マルマイン',
      type: ['Electric'],
    },
    {
      id: 102,
      name: 'タマタマ',
      type: ['Grass', 'Psychic'],
    },
    {
      id: 103,
      name: 'ナッシー',
      type: ['Grass', 'Psychic'],
    },
    {
      id: 104,
      name: 'カラカラ',
      type: ['Ground'],
    },
    {
      id: 105,
      name: 'ガラガラ',
      type: ['Ground'],
    },
    {
      id: 106,
      name: 'サワムラー',
      type: ['Fighting'],
    },
    {
      id: 107,
      name: 'エビワラー',
      type: ['Fighting'],
    },
    {
      id: 108,
      name: 'ベロリンガ',
      type: ['Normal'],
    },
    {
      id: 109,
      name: 'ドガース',
      type: ['Poison'],
    },
    {
      id: 110,
      name: 'マタドガス',
      type: ['Poison'],
    },
    {
      id: 111,
      name: 'サイホーン',
      type: ['Ground', 'Rock'],
    },
    {
      id: 112,
      name: 'サイドン',
      type: ['Ground', 'Rock'],
    },
    {
      id: 113,
      name: 'ラッキー',
      type: ['Normal'],
    },
    {
      id: 114,
      name: 'モンジャラ',
      type: ['Grass'],
    },
    {
      id: 115,
      name: 'ガルーラ',
      type: ['Normal'],
    },
    {
      id: 116,
      name: 'タッツー',
      type: ['Water'],
    },
    {
      id: 117,
      name: 'シードラ',
      type: ['Water'],
    },
    {
      id: 118,
      name: 'トサキント',
      type: ['Water'],
    },
    {
      id: 119,
      name: 'アズマオウ',
      type: ['Water'],
    },
    {
      id: 120,
      name: 'ヒトデマン',
      type: ['Water'],
    },
    {
      id: 121,
      name: 'スターミー',
      type: ['Water', 'Psychic'],
    },
    {
      id: 122,
      name: 'バリヤード',
      type: ['Psychic', 'Fairy'],
    },
    {
      id: 123,
      name: 'ストライク',
      type: ['Bug', 'Flying'],
    },
    {
      id: 124,
      name: 'ルージュラ',
      type: ['Ice', 'Psychic'],
    },
    {
      id: 125,
      name: 'エレブー',
      type: ['Electric'],
    },
    {
      id: 126,
      name: 'ブーバー',
      type: ['Fire'],
    },
    {
      id: 127,
      name: 'カイロス',
      type: ['Bug'],
    },
    {
      id: 128,
      name: 'ケンタロス',
      type: ['Normal'],
    },
    {
      id: 129,
      name: 'コイキング',
      type: ['Water'],
    },
    {
      id: 130,
      name: 'ギャラドス',
      type: ['Water', 'Flying'],
    },
    {
      id: 131,
      name: 'ラプラス',
      type: ['Water', 'Ice'],
    },
    {
      id: 132,
      name: 'メタモン',
      type: ['Normal'],
    },
    {
      id: 133,
      name: 'イーブイ',
      type: ['Normal'],
    },
    {
      id: 134,
      name: 'シャワーズ',
      type: ['Water'],
    },
    {
      id: 135,
      name: 'サンダース',
      type: ['Electric'],
    },
    {
      id: 136,
      name: 'ブースター',
      type: ['Fire'],
    },
    {
      id: 137,
      name: 'ポリゴン',
      type: ['Normal'],
    },
    {
      id: 138,
      name: 'オムナイト',
      type: ['Rock', 'Water'],
    },
    {
      id: 139,
      name: 'オムスター',
      type: ['Rock', 'Water'],
    },
    {
      id: 140,
      name: 'カブト',
      type: ['Rock', 'Water'],
    },
    {
      id: 141,
      name: 'カブトプス',
      type: ['Rock', 'Water'],
    },
    {
      id: 142,
      name: 'プテラ',
      type: ['Rock', 'Flying'],
    },
    {
      id: 143,
      name: 'カビゴン',
      type: ['Normal'],
    },
    {
      id: 144,
      name: 'フリーザー',
      type: ['Ice', 'Flying'],
    },
    {
      id: 145,
      name: 'サンダー',
      type: ['Electric', 'Flying'],
    },
    {
      id: 146,
      name: 'ファイヤー',
      type: ['Fire', 'Flying'],
    },
    {
      id: 147,
      name: 'ミニリュウ',
      type: ['Dragon'],
    },
    {
      id: 148,
      name: 'ハクリュー',
      type: ['Dragon'],
    },
    {
      id: 149,
      name: 'カイリュー',
      type: ['Dragon', 'Flying'],
    },
    {
      id: 150,
      name: 'ミュウツー',
      type: ['Psychic'],
    },
    {
      id: 151,
      name: 'ミュウ',
      type: ['Psychic'],
    },
  ];

  constructor() {}
}

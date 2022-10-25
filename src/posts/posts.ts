import {Post} from '../../types';

const image = 'https://sample-videos.com/img/Sample-jpg-image-10mb.jpg';
const video = 'https://www.w3schools.com/html/mov_bbb.mp4';
const thumbnail = require('../../assets/images/thumbnail.png');

export const posts: Post[] = [
  {
    type: 'image',
    category: 'test1234',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },
  {
    type: 'video',
    category: 'test12',
    media: [
      {
        uri: video,
      },
    ],
  },

  {
    type: 'image',
    category: 'te',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },

  {
    type: 'image',
    category: 'test123',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },

  {
    type: 'video',
    category: 'test',
    media: [
      {
        uri: video,
      },
    ],
  },

  {
    type: 'image',
    category: 'test1234',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },

  {
    type: 'video',
    category: 'test12',
    media: [
      {
        uri: video,
      },
    ],
  },
  {
    type: 'image',
    category: 'test1',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },
  {
    type: 'image',
    category: 'test1',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },
  {
    type: 'video',
    category: 'test12',
    media: [
      {
        uri: video,
      },
    ],
  },

  {
    type: 'video',
    category: 'test1',
    media: [
      {
        uri: video,
      },
    ],
  },
  {
    type: 'image',
    category: 'test1234',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },
  {
    type: 'video',
    category: 'test12',
    media: [
      {
        uri: video,
      },
    ],
  },

  {
    type: 'image',
    category: 'test123',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },

  {
    type: 'video',
    category: 'test',
    media: [
      {
        uri: video,
      },
    ],
  },

  {
    type: 'image',
    category: 'test123',
    media: [
      {
        uri: image,
        thumbnail: thumbnail,
      },
      {
        uri: image,
        thumbnail: thumbnail,
      },
    ],
  },
];

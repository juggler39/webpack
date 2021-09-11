import './styles/index.scss';
import test from './test.js';

const recepy = {
    strips: 2,
    ingot: 1,
    stone: 5,
};
const recepy2 = {
    ...recepy,
    rod: 7,
};
console.log(recepy);
console.log(recepy2);
test();

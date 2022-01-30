var /** @constructor */ RegExpCompat; if( DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT ){(function(Math,Infinity,undefined){
var n = String.fromCharCode, q = Math.floor, r = [], t, u, v, w, x, z, A, B, C, D, E, F, aa;
function G(a) {
  var b = a.length;
  if (!(0 >= b)) {
    var c = a.charCodeAt(0);
    return 55296 <= c && 56319 >= c && 1 < b && (a = a.charCodeAt(1), 56320 <= a && 57343 >= a) ? 1024 * (c - 55296) + a - 56320 + 65536 : c;
  }
}
function H(a, b, c) {
  return a.substr(c, b.length) === b;
}
function I(a) {
  for (var b = a.length, c = []; b;) {
    c[--b] = a[b];
  }
  return c;
}
function J(a, b) {
  for (var c = a.length, d = []; c;) {
    d[--c] = b(a[c], c);
  }
  return d;
}
function ba(a, b) {
  for (var c = (a.length >>> 0) - 1, d = a[c--]; 0 <= c; --c) {
    d = b(d, a[c]);
  }
  return d;
}
;r[924] = [181, 956];
r[452] = [453, 454];
r[455] = [456, 457];
r[458] = [459, 460];
r[497] = [498, 499];
r[921] = [837, 953, 8126];
r[914] = [946, 976];
r[917] = [949, 1013];
r[920] = [952, 977];
r[922] = [954, 1008];
r[928] = [960, 982];
r[929] = [961, 1009];
r[931] = [962, 963];
r[934] = [966, 981];
r[1042] = [1074, 7296];
r[1044] = [1076, 7297];
r[1054] = [1086, 7298];
r[1057] = [1089, 7299];
r[1058] = [1090, 7300, 7301];
r[1066] = [1098, 7302];
r[1122] = [1123, 7303];
r[42570] = [7304, 42571];
r[7776] = [7777, 7835];
t = function(a) {
  this.t = a || [];
};
t.prototype.add = function(a, b) {
  var c = this.t, d = b || a + 1;
  var f = -1;
  for (var g = c.length / 2; 1 < g - f;) {
    var e = f + q((g - f) / 2);
    a <= c[2 * e + 1] ? g = e : f = e;
  }
  f = g;
  g = c.splice(2 * f, 2 * (ca(c, d) - f + 1));
  0 < g.length && (a = Math.min(a, g[0]), d = Math.max(d, g[g.length - 1]));
  c.splice(2 * f, 0, a, d);
};
t.prototype.f = function() {
  var a = this.t;
  if (0 === a.length) {
    return a.push(0, 1114112), this;
  }
  if (0 === a[0] && 1114112 === a[a.length - 1]) {
    return a.shift(), a.pop(), this;
  }
  a.unshift(0);
  a.push(1114112);
  return this;
};
t.prototype.s = function() {
  return new t(I(this.t));
};
t.prototype.has = function(a) {
  var b = this.t, c = ca(b, a);
  if (0 > c || b.length <= 2 * c) {
    return !1;
  }
  var d = b[2 * c + 1];
  return b[2 * c] <= a && a < d;
};
function ca(a, b) {
  for (var c = -1, d = a.length / 2; 1 < d - c;) {
    var f = c + q((d - c) / 2);
    a[2 * f] <= b ? c = f : d = f;
  }
  return c;
}
;u = new t([48, 58]);
v = u.s().f();
w = new t([48, 58, 65, 91, 95, 96, 97, 123]);
x = w.s().f();
z = new t([9, 14, 32, 33, 160, 161, 5760, 5761, 8192, 8203, 8239, 8240, 8287, 8288, 12288, 12289, 65279, 65280]);
A = z.s().f();
var da;
function K(a) {
  switch(a) {
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
  }
  return a;
}
function ea(a) {
  switch(a.c) {
    case 15:
      return K(a.raw);
    case 18:
      return K(a.h[0].raw) + "-" + K(a.h[1].raw);
    case 16:
      switch(a.u) {
        case 1:
          return a.f ? "\\D" : "\\d";
        case 2:
          return a.f ? "\\W" : "\\w";
        case 3:
          return a.f ? "\\S" : "\\s";
      }
  }
}
B = function(a) {
  switch(a.c) {
    case 1:
      return J(a.h, B).join("|");
    case 2:
      return J(a.h, B).join("");
    case 3:
      return "(" + B(a.e) + ")";
    case 5:
      return "(?:" + B(a.e) + ")";
    case 6:
      return B(a.e) + "*" + (a.j ? "?" : "");
    case 7:
      return B(a.e) + "+" + (a.j ? "?" : "");
    case 8:
      return B(a.e) + "?" + (a.j ? "?" : "");
    case 9:
      var b = B(a.e);
      b += "{" + a.min;
      Infinity === a.max ? b += "," : (null !== a.max ? a.max : a.min) != a.min && (b += "," + a.max);
      return b += "}" + (a.j ? "?" : "");
    case 10:
      return a.f ? "\\B" : "\\b";
    case 11:
      return "^";
    case 12:
      return "$";
    case 13:
      return "(?" + (a.w ? "!" : "=") + B(a.e) + ")";
    case 15:
      return a = K(a.raw), "/" === a ? "\\/" : a;
    case 16:
      return ea(a);
    case 17:
      return "[" + (a.f ? "^" : "") + J(a.h, ea).join("") + "]";
    case 19:
      return ".";
    case 20:
      return "\\" + a.index;
    case 21:
      return "\\k<" + a.raw + ">";
  }
};
C = function(a) {
  var b = "";
  a.global && (b += "g");
  a.ignoreCase && (b += "i");
  a.multiline && (b += "m");
  a.sticky && (b += "y");
  return b;
};
D = function(a) {
  var b = "/", c = B(a.e);
  return b = b + ("" === c ? "(?:)" : c) + "/" + C(a.i);
};
da = new t([48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 890, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 1869, 1970, 1984, 
2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 
2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 
3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 3450, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 
3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 
4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 
6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 
8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 
11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 43216, 43226, 43232, 43256, 43259, 43260, 43261, 43310, 
43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 
64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65136, 65141, 65142, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 66462, 
66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68160, 68192, 68221, 68224, 68253, 68288, 68296, 
68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 
70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71482, 71680, 71739, 71840, 71914, 
71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 
92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 119808, 
119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 120782, 120832, 121344, 121399, 
121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 
126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917760, 918E3]);
function fa(a) {
  return "|" === a || ")" === a || "" === a;
}
function L(a) {
  return "0" <= a && "9" >= a;
}
E = function(a, b) {
  this.q = this.a = this.o = 0;
  this.source = a;
  this.flags = b || "";
  this.l = !0;
};
E.prototype.parse = function() {
  var a = {global:!1, ignoreCase:!1, multiline:!1, sticky:!1};
  for (var b = this.flags.length; b;) {
    switch(this.flags.charAt(--b)) {
      case "g":
        a.global = !0;
        break;
      case "i":
        a.ignoreCase = !0;
        break;
      case "m":
        a.multiline = !0;
        break;
      case "y":
        a.sticky = !0;
    }
  }
  this.i = a;
  for (a = this.source.length; this.a < a;) {
    switch(b = M(this), b) {
      case "(":
        H(this.source, "(?", this.a) || ++this.o;
        ++this.a;
        break;
      case "\\":
        ++this.a;
        this.a += M(this).length;
        break;
      case "[":
        a: {
          for (++this.a; this.a < this.source.length;) {
            switch(b = M(this), b) {
              case "]":
                ++this.a;
                break a;
              case "\\":
                ++this.a;
                this.a += M(this).length;
                break;
              default:
                this.a += b.length;
            }
          }
        }
        break;
      default:
        this.a += b.length;
    }
  }
  this.a = 0;
  a = N(this);
  return {c:0, i:this.i, o:this.o, e:a, d:[0, this.a]};
};
function N(a) {
  for (var b = a.a, c = [ha(a)]; "|" === M(a);) {
    ++a.a, c.push(ha(a));
  }
  return 1 === c.length ? c[0] : {c:1, h:c, d:[b, a.a]};
}
function ha(a) {
  for (var b = a.a, c = []; !fa(M(a));) {
    c.push(ia(a));
  }
  return 1 === c.length ? c[0] : {c:2, h:c, d:[b, a.a]};
}
function ia(a) {
  var b = a.a, c = ja(a);
  a: {
    switch(c.c) {
      case 10:
      case 11:
      case 12:
      case 13:
        var d = !0;
        break a;
    }
    d = !1;
  }
  if (d && (!a.l || 13 !== c.c)) {
    return c;
  }
  switch(M(a)) {
    case "*":
      return O(a, 6, b, c);
    case "+":
      return O(a, 7, b, c);
    case "?":
      return O(a, 8, b, c);
    case "{":
      d = a.a;
      var f = ka(a);
      if (!f && a.l) {
        a.a = d, a = c;
      } else {
        d = f.min;
        f = f.max;
        var g = !1;
        "?" === M(a) && (++a.a, g = !0);
        a = {c:9, min:d, max:f, j:g, e:c, d:[b, a.a]};
      }
      return a;
  }
  return c;
}
function O(a, b, c, d) {
  ++a.a;
  var f = !1;
  "?" === M(a) && (++a.a, f = !0);
  return {c:b, j:f, e:d, d:[c, a.a]};
}
function ka(a) {
  var b = a.a;
  ++a.a;
  var c = P(a);
  if (0 > c) {
    a.a = b;
  } else {
    var d = null;
    if ("," === M(a)) {
      if (++a.a, "}" === M(a)) {
        d = Infinity;
      } else {
        if (d = P(a), 0 > d) {
          a.a = b;
          return;
        }
      }
    }
    if ("}" !== M(a)) {
      a.a = b;
    } else {
      return ++a.a, {min:c, max:d};
    }
  }
}
function ja(a) {
  var b = a.a, c = M(a);
  switch(c) {
    case ".":
      return ++a.a, {c:19, d:[b, a.a]};
    case "^":
      return ++a.a, {c:11, d:[b, a.a]};
    case "$":
      return ++a.a, {c:12, d:[b, a.a]};
    case "[":
      b = a.a;
      ++a.a;
      c = !1;
      "^" === M(a) && (++a.a, c = !0);
      for (var d = []; "]" !== M(a);) {
        d.push(la(a));
      }
      ++a.a;
      return {c:17, f:c, h:d, d:[b, a.a]};
    case "\\":
      return ma(a);
    case "(":
      return na(a);
    case "*":
    case "+":
    case "?":
    case "{":
      a.l && ka(a);
  }
  a.a += c.length;
  return {c:15, value:G(c), raw:c, d:[b, a.a]};
}
function la(a) {
  var b = a.a, c = oa(a);
  if ("-" !== M(a) || H(a.source, "-]", a.a)) {
    return c;
  }
  if (16 === c.c && a.l) {
    return c;
  }
  var d = a.a;
  ++a.a;
  var f = oa(a);
  return 16 === f.c && a.l ? (a.a = d, c) : {c:18, h:[c, f], d:[b, a.a]};
}
function oa(a) {
  var b = a.a, c = M(a);
  if ("\\" !== c) {
    return a.a += c.length, {c:15, value:G(c), raw:c, d:[b, a.a]};
  }
  if (H(a.source, "\\-", a.a)) {
    return a.a += 2, {c:15, value:45, raw:"\\-", d:[b, a.a]};
  }
  if (H(a.source, "\\b", a.a)) {
    return a.a += 2, {c:15, value:8, raw:"\\b", d:[b, a.a]};
  }
  if (b = pa(a)) {
    return b;
  }
  if (a = qa(a)) {
    return a;
  }
}
function ma(a) {
  var b = a.a;
  H(a.source, "\\b", a.a) ? (a.a += 2, b = {c:10, f:!1, d:[b, a.a]}) : H(a.source, "\\B", a.a) ? (a.a += 2, b = {c:10, f:!0, d:[b, a.a]}) : b = void 0;
  if (b) {
    return b;
  }
  a: {
    b = a.a;
    ++a.a;
    if ("0" !== M(a)) {
      var c = P(a);
      if (1 <= c) {
        if (a.l) {
          if (c <= a.o) {
            b = {c:20, index:c, d:[b, a.a]};
            break a;
          }
        } else {
          b = {c:20, index:c, d:[b, a.a]};
          break a;
        }
      }
    }
    a.a = b;
    b = void 0;
  }
  if (b || (b = pa(a))) {
    return b;
  }
  if (a = qa(a)) {
    return a;
  }
}
function qa(a) {
  var b = a.a;
  var c = a.a;
  ++a.a;
  if ("u" !== M(a)) {
    a.a = c, c = "";
  } else {
    ++a.a;
    var d = ra(a, 4);
    0 > d && a.l ? (a.a = c, c = "") : c = n(d);
  }
  if ("" !== c) {
    return c = G(c), {c:15, value:c, raw:a.source.slice(b, a.a), d:[b, a.a]};
  }
  ++a.a;
  switch(M(a)) {
    case "t":
      return ++a.a, {c:15, value:9, raw:"\\t", d:[b, a.a]};
    case "n":
      return ++a.a, {c:15, value:10, raw:"\\n", d:[b, a.a]};
    case "v":
      return ++a.a, {c:15, value:11, raw:"\\v", d:[b, a.a]};
    case "f":
      return ++a.a, {c:15, value:12, raw:"\\f", d:[b, a.a]};
    case "r":
      return ++a.a, {c:15, value:13, raw:"\\r", d:[b, a.a]};
    case "c":
      ++a.a;
      d = M(a);
      c = 0;
      if ("a" <= d && "z" >= d || "A" <= d && "Z" >= d) {
        ++a.a, c = d.charCodeAt(0) % 32;
      } else {
        if (a.l) {
          --a.a;
          break;
        }
      }
      return {c:15, value:c, raw:a.source.slice(b, a.a), d:[b, a.a]};
    case "x":
      ++a.a;
      c = ra(a, 2);
      if (0 > c) {
        --a.a;
        break;
      }
      return {c:15, value:c, raw:a.source.slice(b, a.a), d:[b, a.a]};
    case "0":
      if (++a.a, L(M(a))) {
        --a.a;
      } else {
        return {c:15, value:0, raw:"\\0", d:[b, a.a]};
      }
  }
  if (a.l && (c = a.a, d = M(a), "0" <= d && "3" >= d ? (++a.a, d = M(a), "0" <= d && "7" >= d && (++a.a, d = M(a), "0" <= d && "7" >= d && ++a.a)) : "4" <= d && "7" >= d && (++a.a, d = M(a), "0" <= d && "7" >= d && ++a.a), c !== a.a)) {
    return c = parseInt(a.source.slice(c, a.a), 8), {c:15, value:c, raw:a.source.slice(b, a.a), d:[b, a.a]};
  }
  d = M(a);
  c = G(d);
  if (a.l) {
    if ("c" === d) {
      return {c:15, value:92, raw:"\\", d:[b, a.a]};
    }
    if ("k" !== d) {
      return a.a += d.length, {c:15, value:c, raw:"\\" + d, d:[b, a.a]};
    }
  } else {
    if (!da.has(c)) {
      return a.a += d.length, {c:15, value:c, raw:"\\" + d, d:[b, a.a]};
    }
  }
  a.a = b;
}
function pa(a) {
  var b = a.a;
  ++a.a;
  var c = M(a);
  switch(c) {
    case "d":
    case "D":
      return ++a.a, {c:16, u:1, f:"D" === c, d:[b, a.a]};
    case "w":
    case "W":
      return ++a.a, {c:16, u:2, f:"W" === c, d:[b, a.a]};
    case "s":
    case "S":
      return ++a.a, {c:16, u:3, f:"S" === c, d:[b, a.a]};
  }
  a.a = b;
}
function na(a) {
  var b = a.a;
  if (!H(a.source, "(?", a.a)) {
    ++a.a;
    var c = ++a.q;
    var d = N(a);
    ++a.a;
    return {c:3, index:c, e:d, d:[b, a.a]};
  }
  if (H(a.source, "(?:", a.a)) {
    return a.a += 3, d = N(a), ++a.a, {c:5, e:d, d:[b, a.a]};
  }
  if (H(a.source, "(?=", a.a)) {
    return a.a += 3, d = N(a), ++a.a, {c:13, w:!1, e:d, d:[b, a.a]};
  }
  if (H(a.source, "(?!", a.a)) {
    return a.a += 3, d = N(a), ++a.a, {c:13, w:!0, e:d, d:[b, a.a]};
  }
}
function P(a) {
  for (var b = ""; L(M(a));) {
    b += M(a), ++a.a;
  }
  return "" === b ? -1 : parseInt(b, 10);
}
function ra(a, b) {
  for (var c = a.a, d = ""; 0 < b--;) {
    var f = M(a);
    if (!(L(f) || "a" <= f && "f" >= f || "A" <= f && "F" >= f)) {
      return a.a = c, -1;
    }
    d += f;
    a.a += f.length;
  }
  return parseInt(d, 16);
}
function M(a) {
  a = a.source.charCodeAt(a.a);
  return a !== a ? "" : n(a);
}
;var Q, R, sa;
Q = function(a, b) {
  this.input = a;
  this.x = b;
  this.index = b[0];
  this.v = b[1];
  this.length = b.length / 2;
};
Q.prototype.get = function(a) {
  var b = this.x[2 * a];
  a = this.x[2 * a + 1];
  a = [void 0 !== b ? b : -1, void 0 !== a ? a : -1];
  b = a[0];
  a = a[1];
  if (!(0 > b || 0 > a)) {
    return this.input.slice(b, a);
  }
};
R = function(a) {
  var b = n(a).toUpperCase();
  if (2 <= b.length) {
    return a;
  }
  b = b.charCodeAt(0);
  return 128 <= a && 128 > b ? a : b;
};
sa = function(a) {
  var b = r[a];
  return b ? b : [n(a).toLowerCase().charCodeAt(0)];
};
F = function(a) {
  this.g = !1;
  this.p = this.q = 1;
  this.y = a;
  this.ignoreCase = a.i.ignoreCase;
  this.o = a.o;
};
F.prototype.compile = function() {
  var a = S(this, this.y.e);
  a = T([], {b:2, index:0}, a, {b:3, index:0}, {b:17});
  return new aa(this.y, a);
};
function S(a, b) {
  switch(b.c) {
    case 1:
      return ta(a, b);
    case 2:
      var c = I(b.h);
      if (2 === a.p) {
        for (var d = 1, f, g = c.length; d < g; ++d) {
          f = c.pop(), c.unshift(f);
        }
      }
      g = [];
      var e = !1;
      for (d = -1; f = c[++d];) {
        f = S(a, f), T(g, f), e = e || a.g;
      }
      a.g = e;
      return g;
    case 3:
      return c = a.q++, d = S(a, b.e), T([], {b:2 === a.p ? 3 : 2, index:c}, d, {b:2 === a.p ? 2 : 3, index:c});
    case 5:
      return S(a, b.e);
    case 6:
      return c = a.q, d = U(a, S(a, b.e)), c = V(a, c, d), a.g = !1, T([], {b:b.j ? 12 : 11, next:c.length + 1}, c, {b:13, r:-1 - c.length - 1});
    case 7:
      return d = a.q, c = S(a, b.e), d = V(a, d, U(a, c)), T([], c, {b:b.j ? 12 : 11, next:d.length + 1}, d, {b:13, r:-1 - d.length - 1});
    case 8:
      return c = S(a, b.e), a.g = !1, T([], {b:b.j ? 12 : 11, next:c.length}, c);
    case 9:
      return c = a.q, g = b.min, d = S(a, b.e), f = [], 1 === g ? T(f, d) : 1 < g ? (e = V(a, c, d), T(f, {b:19, value:g}, e, {b:8}, {b:16, r:-1 - e.length - 1}, {b:18})) : a.g = !1, e = null != b.max ? b.max : g, Infinity === e ? (e = V(a, c, U(a, d)), T(f, {b:b.j ? 12 : 11, next:e.length + 1}, e, {b:13, r:-1 - e.length - 1})) : e > g && (g = e - g, e = V(a, c, U(a, d)), 1 === g ? T(f, {b:b.j ? 12 : 11, next:e.length}, e) : T(f, {b:19, value:g + 1}, {b:b.j ? 12 : 11, next:e.length + 4}, e, {b:8}, 
      {b:16, r:-1 - e.length - 2}, {b:10}, {b:18})), f;
    case 10:
      return a.g = !1, [{b:b.f ? 27 : 26}];
    case 11:
      return a.g = !1, [{b:14}];
    case 12:
      return a.g = !1, [{b:15}];
    case 13:
      return c = a.p, a.p = 1, d = S(a, b.e), a.g = !1, d = b.w ? T([], {b:20}, {b:21}, {b:11, next:d.length + 2}, d, {b:25}, {b:10}, {b:18}, {b:24}) : T([], {b:20}, {b:21}, d, {b:25}, {b:24}), a.p = c, d;
    case 15:
      return c = b.value, a.ignoreCase && (c = R(c)), a.g = !0, W(a, [{b:5, value:c}]);
    case 16:
      return c = ua(b), a.g = !0, W(a, [{b:6, set:c}]);
    case 17:
      c = new t();
      d = b.h;
      for (f = -1; e = d[++f];) {
        switch(e.c) {
          case 15:
            c.add(e.value, e.value + 1);
            break;
          case 16:
            g = c;
            for (var l = ua(e).t, h = -1, m = l.length - 1; h < m;) {
              var k = l[++h];
              e = l[++h];
              g.add(k, e);
            }
            break;
          case 18:
            c.add(e.h[0].value, e.h[1].value + 1);
        }
      }
      a.g = !0;
      return W(a, [{b:b.f ? 7 : 6, set:c}]);
    case 19:
      return a.g = !0, W(a, [{b:0}]);
    case 20:
      return a.g = !1, [{b:2 === a.p ? 23 : 22, index:b.index}];
    case 21:
      return c = a.F[b.name], a.g = !1, [{b:2 === a.p ? 23 : 22, index:c}];
  }
}
function ta(a, b) {
  for (var c = b.h, d = c.length, f = [], g = !0, e = 0; e < d; ++e) {
    f.push(S(a, c[e])), g = g && a.g;
  }
  a.g = g;
  return ba(f, function(l, h) {
    return T([], {b:11, next:h.length + 1}, h, {b:13, r:l.length}, l);
  });
}
function U(a, b) {
  return a.g ? b : T([], {b:20}, b, {b:9});
}
function V(a, b, c) {
  return b === a.q ? c : T([], {b:4, from:b, D:a.q}, c);
}
function ua(a) {
  switch(a.u) {
    case 1:
      return a.f ? v : u;
    case 2:
      return a.f ? x : w;
    case 3:
      return a.f ? A : z;
  }
}
function W(a, b) {
  return 1 === a.p ? b : T([], {b:1}, b, {b:1});
}
function T(a, b) {
  for (var c = arguments, d = c.length, f = 1, g = a.length - 1, e; f < d; ++f) {
    if ((e = c[f]) && e.pop) {
      for (var l = 0, h = e.length; l < h; ++l) {
        a[++g] = e[l];
      }
    } else {
      a[++g] = e;
    }
  }
  return a;
}
;function X(a, b) {
  var c = a.charCodeAt(b);
  return c !== c ? -1 : c;
}
function Y(a) {
  return 10 === a || 13 === a || 8232 === a || 8233 === a;
}
function Z(a, b, c, d, f) {
  this.a = a;
  this.k = b;
  this.stack = c;
  this.n = d;
  this.m = f;
}
Z.prototype.s = function() {
  return new Z(this.a, this.k, I(this.stack), this.n, I(this.m));
};
aa = function(a, b) {
  this.A = b;
  for (var c = -1, d, f = 0, g = 0; d = b[++c];) {
    switch(d.b) {
      case 19:
      case 20:
      case 21:
        ++f;
        break;
      case 9:
      case 18:
      case 24:
      case 25:
        --f;
    }
    g = Math.max(f, g);
  }
  this.B = g;
  this.ignoreCase = a.i.ignoreCase;
  this.multiline = a.i.multiline;
  this.sticky = a.i.sticky;
  this.o = a.o;
};
RegExpCompat = function(a, b) {
  var c = (new E(a, b)).parse();
  this.v = D(c);
  this.z = (new F(c)).compile();
  var d = B(c.e);
  this.source = "" === d ? "(?:)" : d;
  this.flags = C(c.i);
  this.global = c.i.global;
  this.ignoreCase = c.i.ignoreCase;
  this.multiline = c.i.multiline;
  this.sticky = c.i.sticky;
};
RegExpCompat.prototype.toString = function() {
  return this.v;
};
RegExpCompat.prototype.exec = function(a) {
  var b = this.global || this.sticky, c = 0;
  b && (c = this.lastIndex);
  a: {
    for (var d = this.z; c <= a.length;) {
      for (var f = [], g = f, e = g.push, l = c, h = d.B, m = [], k = 2 * (d.o + 1), p = 0; p < k; ++p) {
        m.push(-1);
      }
      k = [];
      for (p = 0; p < h; ++p) {
        k.push(0);
      }
      for (e.call(g, new Z(l, 0, k, 0, m)); 0 < f.length;) {
        e = f[f.length - 1];
        l = d.A[e.k];
        g = !1;
        ++e.k;
        switch(l.b) {
          case 0:
            h = X(a, e.a);
            0 <= h && !Y(h) ? e.a += 65536 <= h ? 2 : 1 : g = !0;
            break;
          case 1:
            h = X(a, e.a - 1);
            0 <= h ? e.a -= 65536 <= h ? 2 : 1 : g = !0;
            break;
          case 2:
            e.m[2 * l.index] = e.a;
            break;
          case 3:
            e.m[2 * l.index + 1] = e.a;
            break;
          case 4:
            for (k = l.from; k < l.D; ++k) {
              e.m[2 * k] = e.m[2 * k + 1] = -1;
            }
            break;
          case 5:
            h = X(a, e.a);
            0 > h && (g = !0);
            p = d.ignoreCase ? R(h) : h;
            p === l.value ? e.a += 65536 <= h ? 2 : 1 : g = !0;
            break;
          case 6:
          case 7:
            h = X(a, e.a);
            if (0 > h) {
              g = !0;
              break;
            }
            p = d.ignoreCase ? R(h) : h;
            k = l.set.has(p);
            var y = 6 === l.b;
            if (d.ignoreCase) {
              p = sa(p);
              var va = p.length;
              for (m = 0; m < va; ++m) {
                k = k || l.set.has(p[m]);
              }
            }
            k === y ? e.a += 65536 <= h ? 2 : 1 : g = !0;
            break;
          case 8:
            --e.stack[e.n - 1];
            break;
          case 9:
            e.stack[--e.n] === e.a && (g = !0);
            break;
          case 10:
            g = !0;
            break;
          case 11:
          case 12:
            h = e.s();
            f.push(h);
            11 === l.b ? e.k += l.next : h.k += l.next;
            break;
          case 13:
            e.k += l.r;
            break;
          case 14:
            h = X(a, e.a - 1);
            0 === e.a || d.multiline && Y(h) || (g = !0);
            break;
          case 15:
            h = X(a, e.a);
            e.a === a.length || d.multiline && Y(h) || (g = !0);
            break;
          case 16:
            0 < e.stack[e.n - 1] && (e.k += l.r);
            break;
          case 17:
            a = new Q(a, e.m);
            break a;
          case 18:
            --e.n;
            break;
          case 19:
            e.stack[e.n++] = l.value;
            break;
          case 20:
            e.stack[e.n++] = e.a;
            break;
          case 21:
            e.stack[e.n++] = f.length;
            break;
          case 22:
            h = e.m[2 * l.index];
            l = e.m[2 * l.index + 1];
            y = 0 > h || 0 > l ? "" : a.slice(h, l);
            for (k = 0; k < y.length;) {
              h = X(a, e.a);
              m = X(y, k);
              p = d.ignoreCase ? R(h) : h;
              l = d.ignoreCase ? R(m) : m;
              if (p !== l) {
                g = !0;
                break;
              }
              e.a += 65536 <= h ? 2 : 1;
              k += 65536 <= m ? 2 : 1;
            }
            break;
          case 23:
            h = e.m[2 * l.index];
            l = e.m[2 * l.index + 1];
            y = 0 > h || 0 > l ? "" : a.slice(h, l);
            for (k = y.length; 0 < k;) {
              h = X(a, e.a - 1);
              m = X(y, k - 1);
              p = d.ignoreCase ? R(h) : h;
              l = d.ignoreCase ? R(m) : m;
              if (p !== l) {
                g = !0;
                break;
              }
              e.a -= 65536 <= h ? 2 : 1;
              k -= 65536 <= m ? 2 : 1;
            }
            break;
          case 24:
            e.a = e.stack[--e.n];
            break;
          case 25:
            f.length = e.stack[--e.n];
            f[f.length - 1] = e;
            break;
          case 26:
          case 27:
            h = X(a, e.a - 1), m = X(a, e.a), e = w, k = e.has(h) !== e.has(m), y = 26 === l.b, k !== y && (g = !0);
        }
        g && f.pop();
      }
      if (d.sticky) {
        break;
      }
      c += 65536 <= X(a, c) ? 2 : 1;
    }
    a = null;
  }
  b && (this.lastIndex = a ? a.v : 0);
  if (a) {
    b = a;
    a = b.length;
    d = [];
    d.index = b.index;
    d.input = b.input;
    for (c = 0; c < a; ++c) {
      d[c] = b.get(c);
    }
    b = d;
  } else {
    b = null;
  }
  return b;
};
RegExpCompat.prototype.test = function(a) {
  return !!this.exec(a);
};
RegExpCompat.prototype.match = function(a) {
  if (this.global) {
    this.lastIndex = 0;
    for (var b = [], c; c = this.exec(a);) {
      b.push(c[0]), "" === c[0] && (this.lastIndex += 1);
    }
    return 0 === b.length ? null : b;
  }
  return this.exec(a);
};
RegExpCompat.prototype.replace = function(a, b) {
  var c = "function" === typeof b, d = [];
  this.global && (this.lastIndex = 0);
  for (var f; f = this.exec(a);) {
    d.push(f);
    if (!this.global) {
      break;
    }
    "" === f[0] && (this.lastIndex += 1);
  }
  for (var g = 0, e = "", l = d.length, h = 0; h < l; ++h) {
    if (f = d[h], e += a.slice(g, f.index), g = f.index + f[0].length, c) {
      var m = I(f);
      m.push(f.index, a);
      f.groups && m.push(f.groups);
      e += "" + b.apply(null, m);
    } else {
      for (var k = 0;;) {
        m = b.indexOf("$", k);
        e += b.slice(k, -1 === m ? a.length : m);
        if (-1 === m) {
          break;
        }
        var p = b.charAt(m + 1);
        switch(p) {
          case "$":
            k = m + 2;
            e += "$";
            break;
          case "&":
            k = m + 2;
            e += f[0];
            break;
          case "`":
            k = m + 2;
            e += a.slice(0, f.index);
            break;
          case "'":
            k = m + 2;
            e += a.slice(g);
            break;
          case "<":
            break;
          default:
            if ("0" <= p && "9" >= p) {
              k = b.charAt(m + 2);
              p = "0" <= k && "9" >= k ? p + k : p;
              k = p - 0;
              if (0 < k && k < f.length) {
                e += f[k] || "";
                k = m + 1 + p.length;
                break;
              }
              k = q(k / 10);
              if (0 < k && k < f.length) {
                e += f[k] || "";
                k = m + p.length;
                break;
              }
            }
            e += "$";
            k = m + 1;
        }
      }
    }
  }
  return e += a.slice(g);
};
this.RegExpCompat = RegExpCompat;

;})(Math,1/0,void 0);};

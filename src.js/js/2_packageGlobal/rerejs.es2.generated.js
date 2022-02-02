if( DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT ){var RegExpCompat = (function(B, G, C) {
  function D(a, b) {
    var c = a.length;
    if (0 > b || b >= c) {
      return C;
    }
    var e = a.charCodeAt(b);
    return 55296 <= e && 56319 >= e && c > b + 1 && (c = a.charCodeAt(b + 1), 56320 <= c && 57343 >= c) ? 1024 * (e - 55296) + c - 56320 + 65536 : e;
  }
  function w(a, b, c) {
    return a.substr(c, b.length) === b;
  }
  function A(a) {
    for (var b = a.length, c = []; b;) {
      c[--b] = a[b];
    }
    return c;
  }
  function H(a, b) {
    for (var c = a.length, e = []; c;) {
      e[--c] = b(a[c], c);
    }
    return e;
  }
  function T(a, b) {
    for (var c = (a.length >>> 0) - 1, e = a[c--]; 0 <= c; --c) {
      e = b(e, a[c]);
    }
    return e;
  }
  function O(a, b) {
    for (var c = -1, e = a.length / 2; 1 < e - c;) {
      var d = c + I((e - c) / 2);
      a[2 * d] <= b ? c = d : e = d;
    }
    return c;
  }
  function E(a) {
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
  function P(a) {
    switch(a.c) {
      case 15:
        return E(a.raw);
      case 18:
        return E(a.i[0].raw) + "-" + E(a.i[1].raw);
      case 16:
        switch(a.B) {
          case 1:
            return a.g ? "\\D" : "\\d";
          case 2:
            return a.g ? "\\W" : "\\w";
          case 3:
            return a.g ? "\\S" : "\\s";
        }
    }
  }
  function U(a) {
    return "|" === a || ")" === a || "" === a;
  }
  function J(a) {
    return "0" <= a && "9" >= a;
  }
  function r(a, b) {
    for (var c = arguments, e = c.length, d = 1, f = a.length - 1, g; d < e; ++d) {
      if ((g = c[d]) && g.pop) {
        for (var n = 0, p = g.length; n < p; ++n) {
          a[++f] = g[n];
        }
      } else {
        a[++f] = g;
      }
    }
    return a;
  }
  function t(a, b) {
    var c = a.charCodeAt(b);
    return c !== c ? -1 : c;
  }
  function y(a) {
    return 65536 <= a ? 2 : 1;
  }
  function K(a) {
    return 10 === a || 13 === a || 8232 === a || 8233 === a;
  }
  function L(a, b, c, e, d) {
    this.a = a;
    this.l = b;
    this.stack = c;
    this.p = e;
    this.n = d;
  }
  var F = String.fromCharCode, I = B.floor, q = [];
  q[924] = [181, 956];
  q[452] = [453, 454];
  q[455] = [456, 457];
  q[458] = [459, 460];
  q[497] = [498, 499];
  q[921] = [837, 953, 8126];
  q[914] = [946, 976];
  q[917] = [949, 1013];
  q[920] = [952, 977];
  q[922] = [954, 1008];
  q[928] = [960, 982];
  q[929] = [961, 1009];
  q[931] = [962, 963];
  q[934] = [966, 981];
  q[1042] = [1074, 7296];
  q[1044] = [1076, 7297];
  q[1054] = [1086, 7298];
  q[1057] = [1089, 7299];
  q[1058] = [1090, 7300, 7301];
  q[1066] = [1098, 7302];
  q[1122] = [1123, 7303];
  q[42570] = [7304, 42571];
  q[7776] = [7777, 7835];
  var u = function(a) {
    this.w = a || [];
  };
  u.prototype.add = function(a, b) {
    var c = this.w, e = b || a + 1;
    var d = a;
    for (var f = -1, g = c.length / 2; 1 < g - f;) {
      var n = f + I((g - f) / 2);
      d <= c[2 * n + 1] ? g = n : f = n;
    }
    d = g;
    f = O(c, e);
    f = c.splice(2 * d, 2 * (f - d + 1));
    0 < f.length && (a = B.min(a, f[0]), e = B.max(e, f[f.length - 1]));
    c.splice(2 * d, 0, a, e);
  };
  u.prototype.V = function(a) {
    a = a.w;
    for (var b, c, e = -1, d = a.length - 1; e < d;) {
      b = a[++e], c = a[++e], this.add(b, c);
    }
  };
  u.prototype.g = function() {
    var a = this.w;
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
  u.prototype.v = function() {
    return new u(A(this.w));
  };
  u.prototype.has = function(a) {
    var b = this.w, c = O(b, a);
    if (0 > c || b.length <= 2 * c) {
      return !1;
    }
    var e = b[2 * c + 1];
    return b[2 * c] <= a && a < e;
  };
  var Q = new u([48, 58]);
  var V = Q.v().g();
  var M = new u([48, 58, 65, 91, 95, 96, 97, 123]);
  var W = M.v().g();
  var R = new u([9, 14, 32, 33, 160, 161, 5760, 5761, 8192, 8203, 8239, 8240, 8287, 8288, 12288, 12289, 65279, 65280]);
  var X = R.v().g();
  var x = function(a) {
    switch(a.c) {
      case 1:
        return H(a.i, x).join("|");
      case 2:
        return H(a.i, x).join("");
      case 3:
        return "(" + x(a.f) + ")";
      case 5:
        return "(?:" + x(a.f) + ")";
      case 6:
        return x(a.f) + "*" + (a.k ? "?" : "");
      case 7:
        return x(a.f) + "+" + (a.k ? "?" : "");
      case 8:
        return x(a.f) + "?" + (a.k ? "?" : "");
      case 9:
        var b = x(a.f);
        b += "{" + a.min;
        a.max === G ? b += "," : (null !== a.max ? a.max : a.min) != a.min && (b += "," + a.max);
        return b += "}" + (a.k ? "?" : "");
      case 10:
        return a.g ? "\\B" : "\\b";
      case 11:
        return "^";
      case 12:
        return "$";
      case 13:
        return "(?" + (a.D ? "!" : "=") + x(a.f) + ")";
      case 15:
        return a = E(a.raw), "/" === a ? "\\/" : a;
      case 16:
        return P(a);
      case 17:
        return "[" + (a.g ? "^" : "") + H(a.i, P).join("") + "]";
      case 19:
        return ".";
      case 20:
        return "\\" + a.index;
      case 21:
        return "\\k<" + a.raw + ">";
    }
  };
  var Y = function(a) {
    var b = "";
    a.global && (b += "g");
    a.ignoreCase && (b += "i");
    a.multiline && (b += "m");
    a.sticky && (b += "y");
    return b;
  };
  var Z = new u([48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 890, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 1869, 1970, 
  1984, 2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 
  2662, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 
  3018, 3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 3450, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 
  3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 
  4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 
  6432, 6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 
  8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 
  11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 43216, 43226, 43232, 43256, 43259, 43260, 43261, 
  43310, 43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 
  64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65136, 65141, 65142, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 
  66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68160, 68192, 68221, 68224, 68253, 68288, 
  68296, 68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 
  70313, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71482, 71680, 71739, 71840, 
  71914, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 
  83527, 92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 
  119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 120782, 120832, 121344, 
  121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 
  126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917760, 918E3]);
  var m = function(a, b, c) {
    this.s = this.a = this.q = 0;
    this.source = a;
    this.flags = b || "";
    this.m = !1 !== c;
  };
  m.prototype.parse = function() {
    this.j = this.Aa();
    this.za();
    this.a = 0;
    var a = this.y();
    return {c:0, j:this.j, q:this.q, f:a, d:[0, this.a]};
  };
  m.prototype.Aa = function() {
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
    return a;
  };
  m.prototype.za = function() {
    for (var a = this.source.length; this.a < a;) {
      var b = this.e();
      switch(b) {
        case "(":
          w(this.source, "(?", this.a) || ++this.q;
          ++this.a;
          break;
        case "\\":
          ++this.a;
          this.a += this.e().length;
          break;
        case "[":
          this.Ba();
          break;
        default:
          this.a += b.length;
      }
    }
  };
  m.prototype.Ba = function() {
    for (++this.a; this.a < this.source.length;) {
      var a = this.e();
      switch(a) {
        case "]":
          ++this.a;
          return;
        case "\\":
          ++this.a;
          this.a += this.e().length;
          break;
        default:
          this.a += a.length;
      }
    }
  };
  m.prototype.y = function() {
    for (var a = this.a, b = [this.K()]; "|" === this.e();) {
      ++this.a, b.push(this.K());
    }
    return 1 === b.length ? b[0] : {c:1, i:b, d:[a, this.a]};
  };
  m.prototype.K = function() {
    for (var a = this.a, b = []; !U(this.e());) {
      b.push(this.xa());
    }
    return 1 === b.length ? b[0] : {c:2, i:b, d:[a, this.a]};
  };
  m.prototype.xa = function() {
    var a = this.a, b = this.sa();
    if (10 <= b.c && 13 >= b.c && (!this.m || 13 !== b.c)) {
      return b;
    }
    switch(this.e()) {
      case "*":
        return this.G(6, a, b);
      case "+":
        return this.G(7, a, b);
      case "?":
        return this.G(8, a, b);
      case "{":
        return this.ya(a, b);
    }
    return b;
  };
  m.prototype.G = function(a, b, c) {
    ++this.a;
    var e = !1;
    "?" === this.e() && (++this.a, e = !0);
    return {c:a, k:e, f:c, d:[b, this.a]};
  };
  m.prototype.ya = function(a, b) {
    var c = this.a, e = this.U();
    if (!e && this.m) {
      return this.a = c, b;
    }
    c = e.min;
    e = e.max;
    var d = !1;
    "?" === this.e() && (++this.a, d = !0);
    return {c:9, min:c, max:e, k:d, f:b, d:[a, this.a]};
  };
  m.prototype.U = function() {
    var a = this.a;
    ++this.a;
    var b = this.F();
    if (0 > b) {
      this.a = a;
    } else {
      var c = null;
      if ("," === this.e()) {
        if (++this.a, "}" === this.e()) {
          c = G;
        } else {
          if (c = this.F(), 0 > c) {
            this.a = a;
            return;
          }
        }
      }
      if ("}" !== this.e()) {
        this.a = a;
      } else {
        return ++this.a, {min:b, max:c};
      }
    }
  };
  m.prototype.sa = function() {
    var a = this.a, b = this.e();
    switch(b) {
      case ".":
        return ++this.a, {c:19, d:[a, this.a]};
      case "^":
        return ++this.a, {c:11, d:[a, this.a]};
      case "$":
        return ++this.a, {c:12, d:[a, this.a]};
      case "[":
        return this.ta();
      case "\\":
        return this.va();
      case "(":
        return this.wa();
      case "*":
      case "+":
      case "?":
      case "{":
        this.m && this.U();
    }
    this.a += b.length;
    return {c:15, value:D(b, 0), raw:b, d:[a, this.a]};
  };
  m.prototype.ta = function() {
    var a = this.a;
    ++this.a;
    var b = !1;
    "^" === this.e() && (++this.a, b = !0);
    for (var c = []; "]" !== this.e();) {
      c.push(this.ua());
    }
    ++this.a;
    return {c:17, g:b, i:c, d:[a, this.a]};
  };
  m.prototype.ua = function() {
    var a = this.a, b = this.J();
    if ("-" !== this.e() || w(this.source, "-]", this.a)) {
      return b;
    }
    if (16 === b.c && this.m) {
      return b;
    }
    var c = this.a;
    ++this.a;
    var e = this.J();
    return 16 === e.c && this.m ? (this.a = c, b) : {c:18, i:[b, e], d:[a, this.a]};
  };
  m.prototype.J = function() {
    var a = this.a, b = this.e();
    if ("\\" !== b) {
      return this.a += b.length, {c:15, value:D(b, 0), raw:b, d:[a, this.a]};
    }
    if (w(this.source, "\\-", this.a)) {
      return this.a += 2, {c:15, value:45, raw:"\\-", d:[a, this.a]};
    }
    if (w(this.source, "\\b", this.a)) {
      return this.a += 2, {c:15, value:8, raw:"\\b", d:[a, this.a]};
    }
    if ((a = this.R()) || (a = this.Q())) {
      return a;
    }
  };
  m.prototype.va = function() {
    var a = this.Fa();
    if (a || (a = this.Da()) || (a = this.R()) || (a = this.Q())) {
      return a;
    }
  };
  m.prototype.Fa = function() {
    var a = this.a;
    if (w(this.source, "\\b", this.a)) {
      return this.a += 2, {c:10, g:!1, d:[a, this.a]};
    }
    if (w(this.source, "\\B", this.a)) {
      return this.a += 2, {c:10, g:!0, d:[a, this.a]};
    }
  };
  m.prototype.Da = function() {
    var a = this.a;
    ++this.a;
    if ("0" !== this.e()) {
      var b = this.F();
      if (1 <= b) {
        if (this.m) {
          if (b <= this.q) {
            return {c:20, index:b, d:[a, this.a]};
          }
        } else {
          return {c:20, index:b, d:[a, this.a]};
        }
      }
    }
    this.a = a;
  };
  m.prototype.Q = function() {
    var a = this.a;
    var b = this.Ea();
    if ("" !== b) {
      return b = D(b, 0), {c:15, value:b, raw:this.source.slice(a, this.a), d:[a, this.a]};
    }
    ++this.a;
    switch(this.e()) {
      case "t":
        return ++this.a, {c:15, value:9, raw:"\\t", d:[a, this.a]};
      case "n":
        return ++this.a, {c:15, value:10, raw:"\\n", d:[a, this.a]};
      case "v":
        return ++this.a, {c:15, value:11, raw:"\\v", d:[a, this.a]};
      case "f":
        return ++this.a, {c:15, value:12, raw:"\\f", d:[a, this.a]};
      case "r":
        return ++this.a, {c:15, value:13, raw:"\\r", d:[a, this.a]};
      case "c":
        ++this.a;
        var c = this.e();
        b = 0;
        if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
          ++this.a, b = c.charCodeAt(0) % 32;
        } else {
          if (this.m) {
            --this.a;
            break;
          }
        }
        return {c:15, value:b, raw:this.source.slice(a, this.a), d:[a, this.a]};
      case "x":
        ++this.a;
        b = this.T(2);
        if (0 > b) {
          --this.a;
          break;
        }
        return {c:15, value:b, raw:this.source.slice(a, this.a), d:[a, this.a]};
      case "0":
        if (++this.a, J(this.e())) {
          --this.a;
        } else {
          return {c:15, value:0, raw:"\\0", d:[a, this.a]};
        }
    }
    if (this.m && (b = this.a, c = this.e(), "0" <= c && "3" >= c ? (++this.a, c = this.e(), "0" <= c && "7" >= c && (++this.a, c = this.e(), "0" <= c && "7" >= c && ++this.a)) : "4" <= c && "7" >= c && (++this.a, c = this.e(), "0" <= c && "7" >= c && ++this.a), b !== this.a)) {
      return b = parseInt(this.source.slice(b, this.a), 8), {c:15, value:b, raw:this.source.slice(a, this.a), d:[a, this.a]};
    }
    c = this.e();
    b = D(c, 0);
    if (this.m) {
      if ("c" === c) {
        return {c:15, value:92, raw:"\\", d:[a, this.a]};
      }
      if ("k" !== c) {
        return this.a += c.length, {c:15, value:b, raw:"\\" + c, d:[a, this.a]};
      }
    } else {
      if (!Z.has(b)) {
        return this.a += c.length, {c:15, value:b, raw:"\\" + c, d:[a, this.a]};
      }
    }
    this.a = a;
  };
  m.prototype.Ea = function() {
    var a = this.a;
    ++this.a;
    if ("u" !== this.e()) {
      return this.a = a, "";
    }
    ++this.a;
    var b = this.T(4);
    return 0 > b && this.m ? (this.a = a, "") : F(b);
  };
  m.prototype.R = function() {
    var a = this.a;
    ++this.a;
    var b = this.e();
    switch(b) {
      case "d":
      case "D":
        return ++this.a, {c:16, B:1, g:"D" === b, d:[a, this.a]};
      case "w":
      case "W":
        return ++this.a, {c:16, B:2, g:"W" === b, d:[a, this.a]};
      case "s":
      case "S":
        return ++this.a, {c:16, B:3, g:"S" === b, d:[a, this.a]};
    }
    this.a = a;
  };
  m.prototype.wa = function() {
    var a = this.a;
    if (!w(this.source, "(?", this.a)) {
      ++this.a;
      var b = ++this.s;
      var c = this.y();
      ++this.a;
      return {c:3, index:b, f:c, d:[a, this.a]};
    }
    if (w(this.source, "(?:", this.a)) {
      return this.a += 3, c = this.y(), ++this.a, {c:5, f:c, d:[a, this.a]};
    }
    if (w(this.source, "(?=", this.a)) {
      return this.a += 3, c = this.y(), ++this.a, {c:13, D:!1, f:c, d:[a, this.a]};
    }
    if (w(this.source, "(?!", this.a)) {
      return this.a += 3, c = this.y(), ++this.a, {c:13, D:!0, f:c, d:[a, this.a]};
    }
  };
  m.prototype.F = function() {
    for (var a = "", b; J(b = this.e());) {
      a += b, ++this.a;
    }
    return "" === a ? -1 : parseInt(a, 10);
  };
  m.prototype.T = function(a) {
    for (var b = this.a, c = ""; 0 < a--;) {
      var e = this.e(), d = e;
      if (!(J(d) || "a" <= d && "f" >= d || "A" <= d && "F" >= d)) {
        return this.a = b, -1;
      }
      c += e;
      this.a += e.length;
    }
    return parseInt(c, 16);
  };
  m.prototype.e = function() {
    var a = this.source.charCodeAt(this.a);
    return a !== a ? "" : F(a);
  };
  var N = function(a, b) {
    this.input = a;
    this.H = b;
    this.index = b[0];
    this.u = b[1];
    this.length = b.length / 2;
  };
  N.prototype.get = function(a) {
    var b = this.H[2 * a];
    a = this.H[2 * a + 1];
    a = [b !== C ? b : -1, a !== C ? a : -1];
    b = a[0];
    a = a[1];
    return 0 > b || 0 > a ? C : this.input.slice(b, a);
  };
  N.prototype.W = function() {
    var a = this.length, b = [];
    b.index = this.index;
    b.input = this.input;
    for (var c = 0; c < a; ++c) {
      b[c] = this.get(c);
    }
    return b;
  };
  var z = function(a) {
    var b = F(a).toUpperCase();
    if (2 <= b.length) {
      return a;
    }
    b = b.charCodeAt(0);
    return 128 <= a && 128 > b ? a : b;
  };
  var aa = function(a) {
    var b = q[a];
    return b ? b : [F(a).toLowerCase().charCodeAt(0)];
  };
  var l = function(a) {
    this.h = !1;
    this.r = this.s = 1;
    this.O = a;
    this.ignoreCase = a.j.ignoreCase;
    this.q = a.q;
  };
  l.prototype.compile = function() {
    var a = this.o(this.O.f);
    a = r([], {b:2, index:0}, a, {b:3, index:0}, {b:17});
    return new S(this.O, a);
  };
  l.prototype.o = function(a) {
    switch(a.c) {
      case 1:
        return this.ca(a);
      case 2:
        return this.oa(a);
      case 3:
        return this.$(a);
      case 5:
        return this.fa(a);
      case 6:
        return this.ka(a);
      case 7:
        return this.pa(a);
      case 8:
        return this.ma(a);
      case 9:
        return this.na(a);
      case 10:
        return this.qa(a);
      case 11:
        return this.ga();
      case 12:
        return this.ha();
      case 13:
        return this.ia(a);
      case 15:
        return this.aa(a);
      case 16:
        return this.ea(a);
      case 17:
        return this.ba(a);
      case 19:
        return this.da();
      case 20:
        return this.Y(a);
      case 21:
        return this.la(a);
    }
  };
  l.prototype.ca = function(a) {
    a = a.i;
    for (var b = a.length, c = [], e = !0, d = 0; d < b; ++d) {
      c.push(this.o(a[d])), e = e && this.h;
    }
    this.h = e;
    return T(c, function(f, g) {
      return r([], {b:11, next:g.length + 1}, g, {b:13, t:f.length}, f);
    });
  };
  l.prototype.oa = function(a) {
    a = A(a.i);
    if (2 === this.r) {
      for (var b = 1, c, e = a.length; b < e; ++b) {
        c = a.pop(), a.unshift(c);
      }
    }
    e = [];
    var d = !1;
    for (b = -1; c = a[++b];) {
      c = this.o(c), r(e, c), d = d || this.h;
    }
    this.h = d;
    return e;
  };
  l.prototype.fa = function(a) {
    return this.o(a.f);
  };
  l.prototype.$ = function(a) {
    var b = this.s++;
    a = this.o(a.f);
    return r([], {b:2 === this.r ? 3 : 2, index:b}, a, {b:2 === this.r ? 2 : 3, index:b});
  };
  l.prototype.ka = function(a) {
    var b = this.s, c = this.A(this.o(a.f));
    b = this.x(b, c);
    this.h = !1;
    return r([], {b:a.k ? 12 : 11, next:b.length + 1}, b, {b:13, t:-1 - b.length - 1});
  };
  l.prototype.pa = function(a) {
    var b = this.s, c = this.o(a.f);
    b = this.x(b, this.A(c));
    return r([], c, {b:a.k ? 12 : 11, next:b.length + 1}, b, {b:13, t:-1 - b.length - 1});
  };
  l.prototype.ma = function(a) {
    var b = this.o(a.f);
    this.h = !1;
    return r([], {b:a.k ? 12 : 11, next:b.length}, b);
  };
  l.prototype.na = function(a) {
    var b = this.s, c = a.min, e = this.o(a.f), d = [];
    if (1 === c) {
      r(d, e);
    } else {
      if (1 < c) {
        var f = this.x(b, e);
        r(d, {b:19, value:c}, f, {b:8}, {b:16, t:-1 - f.length - 1}, {b:18});
      } else {
        this.h = !1;
      }
    }
    f = null != a.max ? a.max : c;
    f === G ? (f = this.x(b, this.A(e)), r(d, {b:a.k ? 12 : 11, next:f.length + 1}, f, {b:13, t:-1 - f.length - 1})) : f > c && (c = f - c, f = this.x(b, this.A(e)), 1 === c ? r(d, {b:a.k ? 12 : 11, next:f.length}, f) : r(d, {b:19, value:c + 1}, {b:a.k ? 12 : 11, next:f.length + 4}, f, {b:8}, {b:16, t:-1 - f.length - 2}, {b:10}, {b:18}));
    return d;
  };
  l.prototype.A = function(a) {
    return this.h ? a : r([], {b:20}, a, {b:9});
  };
  l.prototype.x = function(a, b) {
    return a === this.s ? b : r([], {b:4, from:a, Ca:this.s}, b);
  };
  l.prototype.qa = function(a) {
    this.h = !1;
    return [{b:a.g ? 27 : 26}];
  };
  l.prototype.ga = function() {
    this.h = !1;
    return [{b:14}];
  };
  l.prototype.ha = function() {
    this.h = !1;
    return [{b:15}];
  };
  l.prototype.ia = function(a) {
    var b = this.r;
    this.r = 1;
    a = this.ja(a);
    this.r = b;
    return a;
  };
  l.prototype.ja = function(a) {
    var b = this.o(a.f);
    this.h = !1;
    return a.D ? r([], {b:20}, {b:21}, {b:11, next:b.length + 2}, b, {b:25}, {b:10}, {b:18}, {b:24}) : r([], {b:20}, {b:21}, b, {b:25}, {b:24});
  };
  l.prototype.aa = function(a) {
    a = a.value;
    this.ignoreCase && (a = z(a, this.unicode));
    this.h = !0;
    return this.z([{b:5, value:a}]);
  };
  l.prototype.ea = function(a) {
    a = this.I(a);
    this.h = !0;
    return this.z([{b:6, set:a}]);
  };
  l.prototype.ba = function(a) {
    for (var b = new u(), c = a.i, e, d = -1; e = c[++d];) {
      switch(e.c) {
        case 15:
          b.add(e.value, e.value + 1);
          break;
        case 16:
          b.V(this.I(e));
          break;
        case 18:
          b.add(e.i[0].value, e.i[1].value + 1);
      }
    }
    this.h = !0;
    return this.z([{b:a.g ? 7 : 6, set:b}]);
  };
  l.prototype.I = function(a) {
    switch(a.B) {
      case 1:
        return a.g ? V : Q;
      case 2:
        return a.g ? W : M;
      case 3:
        return a.g ? X : R;
    }
  };
  l.prototype.da = function() {
    this.h = !0;
    return this.z([{b:0}]);
  };
  l.prototype.z = function(a) {
    return 1 === this.r ? a : r([], {b:1}, a, {b:1});
  };
  l.prototype.Y = function(a) {
    this.h = !1;
    return [{b:2 === this.r ? 23 : 22, index:a.index}];
  };
  l.prototype.la = function(a) {
    a = this.Ga[a.name];
    this.h = !1;
    return [{b:2 === this.r ? 23 : 22, index:a}];
  };
  L.prototype.v = function() {
    return new L(this.a, this.l, A(this.stack), this.p, A(this.n));
  };
  var S = function(a, b) {
    this.X = b;
    for (var c = -1, e, d = 0, f = 0; e = b[++c];) {
      switch(e.b) {
        case 19:
        case 20:
        case 21:
          ++d;
          break;
        case 9:
        case 18:
        case 24:
        case 25:
          --d;
      }
      f = B.max(d, f);
    }
    this.ra = f;
    this.ignoreCase = a.j.ignoreCase;
    this.multiline = a.j.multiline;
    this.sticky = a.j.sticky;
    this.q = a.q;
  };
  S.prototype.u = function(a, b) {
    for (; b <= a.length;) {
      for (var c = b, e = this.ra, d = [], f = 2 * (this.q + 1), g = 0; g < f; ++g) {
        d.push(-1);
      }
      f = [];
      for (g = 0; g < e; ++g) {
        f.push(0);
      }
      for (c = [new L(c, 0, f, 0, d)]; 0 < c.length;) {
        d = c[c.length - 1];
        g = this.X[d.l];
        e = !1;
        ++d.l;
        var n;
        switch(g.b) {
          case 0:
            f = t(a, d.a, this.unicode);
            0 <= f && !K(f) ? d.a += y(f) : e = !0;
            break;
          case 1:
            f = t(a, d.a - 1, this.unicode);
            0 <= f ? d.a -= y(f) : e = !0;
            break;
          case 2:
            d.n[2 * g.index] = d.a;
            break;
          case 3:
            d.n[2 * g.index + 1] = d.a;
            break;
          case 4:
            for (var p = g.from; p < g.Ca; ++p) {
              d.n[2 * p] = d.n[2 * p + 1] = -1;
            }
            break;
          case 5:
            f = t(a, d.a, this.unicode);
            0 > f && (e = !0);
            var k = this.ignoreCase ? z(f, this.unicode) : f;
            k === g.value ? d.a += y(f) : e = !0;
            break;
          case 6:
          case 7:
            f = t(a, d.a, this.unicode);
            if (0 > f) {
              e = !0;
              break;
            }
            k = this.ignoreCase ? z(f, this.unicode) : f;
            p = g.set.has(k);
            var h = 6 === g.b;
            if (this.ignoreCase) {
              k = aa(k, this.unicode);
              var v = k.length;
              for (n = 0; n < v; ++n) {
                p = p || g.set.has(k[n]);
              }
            }
            p === h ? d.a += y(f) : e = !0;
            break;
          case 8:
            --d.stack[d.p - 1];
            break;
          case 9:
            d.stack[--d.p] === d.a && (e = !0);
            break;
          case 10:
            e = !0;
            break;
          case 11:
          case 12:
            f = d.v();
            c.push(f);
            11 === g.b ? d.l += g.next : f.l += g.next;
            break;
          case 13:
            d.l += g.t;
            break;
          case 14:
            f = t(a, d.a - 1, this.unicode);
            0 === d.a || this.multiline && K(f) || (e = !0);
            break;
          case 15:
            f = t(a, d.a, this.unicode);
            d.a === a.length || this.multiline && K(f) || (e = !0);
            break;
          case 16:
            0 < d.stack[d.p - 1] && (d.l += g.t);
            break;
          case 17:
            return new N(a, d.n);
          case 18:
            --d.p;
            break;
          case 19:
            d.stack[d.p++] = g.value;
            break;
          case 20:
            d.stack[d.p++] = d.a;
            break;
          case 21:
            d.stack[d.p++] = c.length;
            break;
          case 22:
            f = d.n[2 * g.index];
            g = d.n[2 * g.index + 1];
            h = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (p = 0; p < h.length;) {
              f = t(a, d.a, this.unicode);
              n = t(h, p, this.unicode);
              k = this.ignoreCase ? z(f, this.unicode) : f;
              g = this.ignoreCase ? z(n, this.unicode) : n;
              if (k !== g) {
                e = !0;
                break;
              }
              d.a += y(f);
              p += y(n);
            }
            break;
          case 23:
            f = d.n[2 * g.index];
            g = d.n[2 * g.index + 1];
            h = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (p = h.length; 0 < p;) {
              f = t(a, d.a - 1, this.unicode);
              n = t(h, p - 1, this.unicode);
              k = this.ignoreCase ? z(f, this.unicode) : f;
              g = this.ignoreCase ? z(n, this.unicode) : n;
              if (k !== g) {
                e = !0;
                break;
              }
              d.a -= y(f);
              p -= y(n);
            }
            break;
          case 24:
            d.a = d.stack[--d.p];
            break;
          case 25:
            c.length = d.stack[--d.p];
            c[c.length - 1] = d;
            break;
          case 26:
          case 27:
            f = t(a, d.a - 1, this.unicode), n = t(a, d.a, this.unicode), d = M, p = d.has(f) !== d.has(n), h = 26 === g.b, p !== h && (e = !0);
        }
        e && c.pop();
      }
      if (this.sticky) {
        break;
      }
      b += y(t(a, b, this.unicode));
    }
    return null;
  };
  RegExpCompat = function(a, b) {
    var c = (new m(a, b, !0)).parse();
    this.u = (new l(c)).compile();
    var e = x(c.f);
    this.source = "" === e ? "(?:)" : e;
    this.flags = Y(c.j);
    this.global = c.j.global;
    this.ignoreCase = c.j.ignoreCase;
    this.multiline = c.j.multiline;
    this.sticky = c.j.sticky;
  };
  RegExpCompat.prototype.toString = function() {
    return "/" + this.source + "/" + this.flags;
  };
  RegExpCompat.prototype.exec = function(a) {
    var b = this.global || this.sticky, c = 0;
    b && (c = this.lastIndex);
    a = this.u.u(a, c);
    b && (this.lastIndex = a ? a.u : 0);
    return a ? a.W() : null;
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
    var c = "function" === typeof b, e = [];
    this.global && (this.lastIndex = 0);
    for (var d; d = this.exec(a);) {
      e.push(d);
      if (!this.global) {
        break;
      }
      "" === d[0] && (this.lastIndex += 1);
    }
    for (var f = 0, g = "", n = e.length, p = 0; p < n; ++p) {
      if (d = e[p], g += a.slice(f, d.index), f = d.index + d[0].length, c) {
        var k = A(d);
        k.push(d.index, a);
        d.groups && k.push(d.groups);
        g += "" + b.apply(null, k);
      } else {
        for (var h = 0;;) {
          k = b.indexOf("$", h);
          g += b.slice(h, -1 === k ? a.length : k);
          if (-1 === k) {
            break;
          }
          var v = b.charAt(k + 1);
          switch(v) {
            case "$":
              h = k + 2;
              g += "$";
              break;
            case "&":
              h = k + 2;
              g += d[0];
              break;
            case "`":
              h = k + 2;
              g += a.slice(0, d.index);
              break;
            case "'":
              h = k + 2;
              g += a.slice(f);
              break;
            case "<":
              break;
            default:
              if ("0" <= v && "9" >= v) {
                h = b.charAt(k + 2);
                v = "0" <= h && "9" >= h ? v + h : v;
                h = v - 0;
                if (0 < h && h < d.length) {
                  g += d[h] || "";
                  h = k + 1 + v.length;
                  break;
                }
                h = I(h / 10);
                if (0 < h && h < d.length) {
                  g += d[h] || "";
                  h = k + v.length;
                  break;
                }
              }
              g += "$";
              h = k + 1;
          }
        }
      }
    }
    return g += a.slice(f);
  };
  return this.RegExpCompat = RegExpCompat;
})(Math, 1 / 0, void 0);
;};

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var jsonwebtoken_1 = require("jsonwebtoken");
// possible verification statuses
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["UNINITIATED"] = "UNINITIATED";
    VerificationStatus["INITIATED"] = "INITIATED";
    VerificationStatus["PENDING"] = "PENDING";
    VerificationStatus["VERIFIED"] = "VERIFIED";
    VerificationStatus["FAILED"] = "FAILED";
    VerificationStatus["LOCKED"] = "LOCKED";
})(VerificationStatus = exports.VerificationStatus || (exports.VerificationStatus = {}));
// identity document types
var IdentityIdType;
(function (IdentityIdType) {
    IdentityIdType["PASSPORT"] = "PASSPORT";
    IdentityIdType["DRIVING_LICENCE"] = "DRIVING_LICENCE";
    IdentityIdType["ID_CARD"] = "ID_CARD";
    IdentityIdType["VISA"] = "VISA";
    IdentityIdType["UK_BIOMETRIC_RESIDENCE_PERMIT"] = "UK_BIOMETRIC_RESIDENCE_PERMIT";
    IdentityIdType["TAX_ID"] = "TAX_ID";
    IdentityIdType["VOTER_ID"] = "VOTER_ID";
    IdentityIdType["RESIDENCE_PERMIT"] = "RESIDENCE_PERMIT";
    IdentityIdType["WORK_PERMIT"] = "WORK_PERMIT";
    IdentityIdType["BANK_STATEMENT"] = "BANK_STATEMENT";
    IdentityIdType["UNKNOWN"] = "UNKNOWN";
    IdentityIdType["BIRTH_CERTIFICATE"] = "BIRTH_CERTIFICATE";
    IdentityIdType["NATIONAL_INSURANCE_CARD"] = "NATIONAL_INSURANCE_CARD";
    IdentityIdType["GOVERNMENT_LETTER"] = "GOVERNMENT_LETTER";
    IdentityIdType["P45_P60"] = "P45_P60";
    IdentityIdType["PAYSLIP"] = "PAYSLIP";
    IdentityIdType["BANK_BUILDING_SOCIETY_STATEMENT"] = "BANK_BUILDING_SOCIETY_STATEMENT";
    IdentityIdType["UTILITY_BILL_ELECTRIC"] = "UTILITY_BILL_ELECTRIC";
    IdentityIdType["UTILITY_BILL_GAS"] = "UTILITY_BILL_GAS";
    IdentityIdType["UTILITY_BILL_OTHER"] = "UTILITY_BILL_OTHER";
    IdentityIdType["NON_UK_DRIVING_LICENCE"] = "NON_UK_DRIVING_LICENCE";
    IdentityIdType["UK_DRIVING_LICENCE"] = "UK_DRIVING_LICENCE";
    IdentityIdType["MOTORCYCLE_INSURANCE"] = "MOTORCYCLE_INSURANCE";
    IdentityIdType["CBT"] = "CBT";
    IdentityIdType["MARRIAGE_CERTIFICATE"] = "MARRIAGE_CERTIFICATE";
    IdentityIdType["NATURALISATION_CERTIFICATE"] = "NATURALISATION_CERTIFICATE";
    IdentityIdType["CHARACTER_REFERENCE"] = "CHARACTER_REFERENCE";
    IdentityIdType["STATEMENT_FACT"] = "STATEMENT_FACT";
    IdentityIdType["EDUCATIONAL_STATEMENT"] = "EDUCATIONAL_STATEMENT";
    IdentityIdType["PASSPORT_CARD"] = "PASSPORT_CARD";
    IdentityIdType["CERTIFICATE_OF_NATURALISATION"] = "CERTIFICATE_OF_NATURALISATION";
    IdentityIdType["IMMIGRATION_STATUS_DOCUMENT"] = "IMMIGRATION_STATUS_DOCUMENT";
    IdentityIdType["HOME_OFFICE_LETTER"] = "HOME_OFFICE_LETTER";
    IdentityIdType["UTILITY_BILL"] = "UTILITY_BILL";
    IdentityIdType["COUNCIL_TAX"] = "COUNCIL_TAX";
    IdentityIdType["BENEFIT_LETTERS"] = "BENEFIT_LETTERS";
    IdentityIdType["CREDIT_CARD_STATEMENT"] = "CREDIT_CARD_STATEMENT";
    IdentityIdType["PROFESSIONAL_IDENTIFICATION_CARD"] = "PROFESSIONAL_IDENTIFICATION_CARD";
    IdentityIdType["SOCIAL_SECURITY_CARD"] = "SOCIAL_SECURITY_CARD";
    IdentityIdType["POSTAL_IDENTITY_CARD"] = "POSTAL_IDENTITY_CARD";
})(IdentityIdType = exports.IdentityIdType || (exports.IdentityIdType = {}));
// identity rejection reasons
var IdentityRejectReason;
(function (IdentityRejectReason) {
    IdentityRejectReason["ID_INVALID_DATA"] = "ID_INVALID_DATA";
    IdentityRejectReason["ID_UNSUPPORTED"] = "ID_UNSUPPORTED";
    IdentityRejectReason["ID_INSUFFICIENT_QUALITY"] = "ID_INSUFFICIENT_QUALITY";
    IdentityRejectReason["ID_EXPIRED"] = "ID_EXPIRED";
    IdentityRejectReason["ID_UNDERAGE"] = "ID_UNDERAGE";
    IdentityRejectReason["ID_DATA_MISMATCH"] = "ID_DATA_MISMATCH";
    IdentityRejectReason["ID_COMPROMISED"] = "ID_COMPROMISED";
    IdentityRejectReason["SELFIE_MISMATCH"] = "SELFIE_MISMATCH";
    IdentityRejectReason["SELFIE_INSUFFICIENT_QUALITY"] = "SELFIE_INSUFFICIENT_QUALITY";
    IdentityRejectReason["UNKNOWN"] = "UNKNOWN";
})(IdentityRejectReason = exports.IdentityRejectReason || (exports.IdentityRejectReason = {}));
// supported ISO 3166-1 alpha-3 country code list
var CountryCode;
(function (CountryCode) {
    CountryCode["AFG"] = "AFG";
    CountryCode["ALA"] = "ALA";
    CountryCode["ALB"] = "ALB";
    CountryCode["DZA"] = "DZA";
    CountryCode["ASM"] = "ASM";
    CountryCode["AND"] = "AND";
    CountryCode["AGO"] = "AGO";
    CountryCode["AIA"] = "AIA";
    CountryCode["ATA"] = "ATA";
    CountryCode["ATG"] = "ATG";
    CountryCode["ARG"] = "ARG";
    CountryCode["ARM"] = "ARM";
    CountryCode["ABW"] = "ABW";
    CountryCode["AUS"] = "AUS";
    CountryCode["AUT"] = "AUT";
    CountryCode["AZE"] = "AZE";
    CountryCode["BHS"] = "BHS";
    CountryCode["BHR"] = "BHR";
    CountryCode["BGD"] = "BGD";
    CountryCode["BRB"] = "BRB";
    CountryCode["BLR"] = "BLR";
    CountryCode["BEL"] = "BEL";
    CountryCode["BLZ"] = "BLZ";
    CountryCode["BEN"] = "BEN";
    CountryCode["BMU"] = "BMU";
    CountryCode["BTN"] = "BTN";
    CountryCode["BOL"] = "BOL";
    CountryCode["BES"] = "BES";
    CountryCode["BIH"] = "BIH";
    CountryCode["BWA"] = "BWA";
    CountryCode["BVT"] = "BVT";
    CountryCode["BRA"] = "BRA";
    CountryCode["IOT"] = "IOT";
    CountryCode["BRN"] = "BRN";
    CountryCode["BGR"] = "BGR";
    CountryCode["BFA"] = "BFA";
    CountryCode["BDI"] = "BDI";
    CountryCode["CPV"] = "CPV";
    CountryCode["KHM"] = "KHM";
    CountryCode["CMR"] = "CMR";
    CountryCode["CAN"] = "CAN";
    CountryCode["CYM"] = "CYM";
    CountryCode["CAF"] = "CAF";
    CountryCode["TCD"] = "TCD";
    CountryCode["CHL"] = "CHL";
    CountryCode["CHN"] = "CHN";
    CountryCode["CXR"] = "CXR";
    CountryCode["CCK"] = "CCK";
    CountryCode["COL"] = "COL";
    CountryCode["COM"] = "COM";
    CountryCode["COG"] = "COG";
    CountryCode["COD"] = "COD";
    CountryCode["COK"] = "COK";
    CountryCode["CRI"] = "CRI";
    CountryCode["CIV"] = "CIV";
    CountryCode["HRV"] = "HRV";
    CountryCode["CUB"] = "CUB";
    CountryCode["CUW"] = "CUW";
    CountryCode["CYP"] = "CYP";
    CountryCode["CZE"] = "CZE";
    CountryCode["DNK"] = "DNK";
    CountryCode["DJI"] = "DJI";
    CountryCode["DMA"] = "DMA";
    CountryCode["DOM"] = "DOM";
    CountryCode["ECU"] = "ECU";
    CountryCode["EGY"] = "EGY";
    CountryCode["SLV"] = "SLV";
    CountryCode["GNQ"] = "GNQ";
    CountryCode["ERI"] = "ERI";
    CountryCode["EST"] = "EST";
    CountryCode["SWZ"] = "SWZ";
    CountryCode["ETH"] = "ETH";
    CountryCode["FLK"] = "FLK";
    CountryCode["FRO"] = "FRO";
    CountryCode["FJI"] = "FJI";
    CountryCode["FIN"] = "FIN";
    CountryCode["FRA"] = "FRA";
    CountryCode["GUF"] = "GUF";
    CountryCode["PYF"] = "PYF";
    CountryCode["ATF"] = "ATF";
    CountryCode["GAB"] = "GAB";
    CountryCode["GMB"] = "GMB";
    CountryCode["GEO"] = "GEO";
    CountryCode["DEU"] = "DEU";
    CountryCode["GHA"] = "GHA";
    CountryCode["GIB"] = "GIB";
    CountryCode["GRC"] = "GRC";
    CountryCode["GRL"] = "GRL";
    CountryCode["GRD"] = "GRD";
    CountryCode["GLP"] = "GLP";
    CountryCode["GUM"] = "GUM";
    CountryCode["GTM"] = "GTM";
    CountryCode["GGY"] = "GGY";
    CountryCode["GIN"] = "GIN";
    CountryCode["GNB"] = "GNB";
    CountryCode["GUY"] = "GUY";
    CountryCode["HTI"] = "HTI";
    CountryCode["HMD"] = "HMD";
    CountryCode["VAT"] = "VAT";
    CountryCode["HND"] = "HND";
    CountryCode["HKG"] = "HKG";
    CountryCode["HUN"] = "HUN";
    CountryCode["ISL"] = "ISL";
    CountryCode["IND"] = "IND";
    CountryCode["IDN"] = "IDN";
    CountryCode["IRN"] = "IRN";
    CountryCode["IRQ"] = "IRQ";
    CountryCode["IRL"] = "IRL";
    CountryCode["IMN"] = "IMN";
    CountryCode["ISR"] = "ISR";
    CountryCode["ITA"] = "ITA";
    CountryCode["JAM"] = "JAM";
    CountryCode["JPN"] = "JPN";
    CountryCode["JEY"] = "JEY";
    CountryCode["JOR"] = "JOR";
    CountryCode["KAZ"] = "KAZ";
    CountryCode["KEN"] = "KEN";
    CountryCode["KIR"] = "KIR";
    CountryCode["PRK"] = "PRK";
    CountryCode["KOR"] = "KOR";
    CountryCode["KWT"] = "KWT";
    CountryCode["KGZ"] = "KGZ";
    CountryCode["LAO"] = "LAO";
    CountryCode["LVA"] = "LVA";
    CountryCode["LBN"] = "LBN";
    CountryCode["LSO"] = "LSO";
    CountryCode["LBR"] = "LBR";
    CountryCode["LBY"] = "LBY";
    CountryCode["LIE"] = "LIE";
    CountryCode["LTU"] = "LTU";
    CountryCode["LUX"] = "LUX";
    CountryCode["MAC"] = "MAC";
    CountryCode["MKD"] = "MKD";
    CountryCode["MDG"] = "MDG";
    CountryCode["MWI"] = "MWI";
    CountryCode["MYS"] = "MYS";
    CountryCode["MDV"] = "MDV";
    CountryCode["MLI"] = "MLI";
    CountryCode["MLT"] = "MLT";
    CountryCode["MHL"] = "MHL";
    CountryCode["MTQ"] = "MTQ";
    CountryCode["MRT"] = "MRT";
    CountryCode["MUS"] = "MUS";
    CountryCode["MYT"] = "MYT";
    CountryCode["MEX"] = "MEX";
    CountryCode["FSM"] = "FSM";
    CountryCode["MDA"] = "MDA";
    CountryCode["MCO"] = "MCO";
    CountryCode["MNG"] = "MNG";
    CountryCode["MNE"] = "MNE";
    CountryCode["MSR"] = "MSR";
    CountryCode["MAR"] = "MAR";
    CountryCode["MOZ"] = "MOZ";
    CountryCode["MMR"] = "MMR";
    CountryCode["NAM"] = "NAM";
    CountryCode["NRU"] = "NRU";
    CountryCode["NPL"] = "NPL";
    CountryCode["NLD"] = "NLD";
    CountryCode["NCL"] = "NCL";
    CountryCode["NZL"] = "NZL";
    CountryCode["NIC"] = "NIC";
    CountryCode["NER"] = "NER";
    CountryCode["NGA"] = "NGA";
    CountryCode["NIU"] = "NIU";
    CountryCode["NFK"] = "NFK";
    CountryCode["MNP"] = "MNP";
    CountryCode["NOR"] = "NOR";
    CountryCode["OMN"] = "OMN";
    CountryCode["PAK"] = "PAK";
    CountryCode["PLW"] = "PLW";
    CountryCode["PSE"] = "PSE";
    CountryCode["PAN"] = "PAN";
    CountryCode["PNG"] = "PNG";
    CountryCode["PRY"] = "PRY";
    CountryCode["PER"] = "PER";
    CountryCode["PHL"] = "PHL";
    CountryCode["PCN"] = "PCN";
    CountryCode["POL"] = "POL";
    CountryCode["PRT"] = "PRT";
    CountryCode["PRI"] = "PRI";
    CountryCode["QAT"] = "QAT";
    CountryCode["REU"] = "REU";
    CountryCode["ROU"] = "ROU";
    CountryCode["RUS"] = "RUS";
    CountryCode["RWA"] = "RWA";
    CountryCode["BLM"] = "BLM";
    CountryCode["SHN"] = "SHN";
    CountryCode["KNA"] = "KNA";
    CountryCode["LCA"] = "LCA";
    CountryCode["MAF"] = "MAF";
    CountryCode["SPM"] = "SPM";
    CountryCode["VCT"] = "VCT";
    CountryCode["WSM"] = "WSM";
    CountryCode["SMR"] = "SMR";
    CountryCode["STP"] = "STP";
    CountryCode["SAU"] = "SAU";
    CountryCode["SEN"] = "SEN";
    CountryCode["SRB"] = "SRB";
    CountryCode["SYC"] = "SYC";
    CountryCode["SLE"] = "SLE";
    CountryCode["SGP"] = "SGP";
    CountryCode["SXM"] = "SXM";
    CountryCode["SVK"] = "SVK";
    CountryCode["SVN"] = "SVN";
    CountryCode["SLB"] = "SLB";
    CountryCode["SOM"] = "SOM";
    CountryCode["ZAF"] = "ZAF";
    CountryCode["SGS"] = "SGS";
    CountryCode["SSD"] = "SSD";
    CountryCode["ESP"] = "ESP";
    CountryCode["LKA"] = "LKA";
    CountryCode["SDN"] = "SDN";
    CountryCode["SUR"] = "SUR";
    CountryCode["SJM"] = "SJM";
    CountryCode["SWE"] = "SWE";
    CountryCode["CHE"] = "CHE";
    CountryCode["SYR"] = "SYR";
    CountryCode["TWN"] = "TWN";
    CountryCode["TJK"] = "TJK";
    CountryCode["TZA"] = "TZA";
    CountryCode["THA"] = "THA";
    CountryCode["TLS"] = "TLS";
    CountryCode["TGO"] = "TGO";
    CountryCode["TKL"] = "TKL";
    CountryCode["TON"] = "TON";
    CountryCode["TTO"] = "TTO";
    CountryCode["TUN"] = "TUN";
    CountryCode["TUR"] = "TUR";
    CountryCode["TKM"] = "TKM";
    CountryCode["TCA"] = "TCA";
    CountryCode["TUV"] = "TUV";
    CountryCode["UGA"] = "UGA";
    CountryCode["UKR"] = "UKR";
    CountryCode["ARE"] = "ARE";
    CountryCode["GBR"] = "GBR";
    CountryCode["USA"] = "USA";
    CountryCode["UMI"] = "UMI";
    CountryCode["URY"] = "URY";
    CountryCode["UZB"] = "UZB";
    CountryCode["VUT"] = "VUT";
    CountryCode["VEN"] = "VEN";
    CountryCode["VNM"] = "VNM";
    CountryCode["VGB"] = "VGB";
    CountryCode["VIR"] = "VIR";
    CountryCode["WLF"] = "WLF";
    CountryCode["ESH"] = "ESH";
    CountryCode["XKX"] = "XKX";
    CountryCode["YEM"] = "YEM";
    CountryCode["ZMB"] = "ZMB";
    CountryCode["ZWE"] = "ZWE";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
// possible user status
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["BLOCKED"] = "BLOCKED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var VerifyOnce = /** @class */ (function () {
    function VerifyOnce(options) {
        this.options = __assign({ baseUrl: "https://app.verifyonce.com/api/verify" }, options);
        this.api = axios_1.default.create({
            baseURL: this.options.baseUrl,
            auth: {
                username: this.options.username,
                password: this.options.password
            }
        });
    }
    VerifyOnce.prototype.initiate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.post("/initiate")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    VerifyOnce.prototype.verifyCallbackInfo = function (body) {
        return jsonwebtoken_1.verify(body, this.options.password);
    };
    return VerifyOnce;
}());
exports.VerifyOnce = VerifyOnce;
//# sourceMappingURL=index.js.map
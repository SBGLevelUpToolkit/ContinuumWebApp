'use strict';

angular.module('continuumAssessmentPlatform.teamselection', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/select-team', {
            templateUrl: 'teamselection/team-selection.html',
            controller: 'TeamSelectionCtrl'
        });
    }])

    .controller('TeamSelectionCtrl', ['$location', '$scope', '$rootScope', 'RetrieveAssessment', function($location, $scope, $rootScope, RetrieveAssessment) {
        $scope.teams = [{}];
        $scope.selectedTeam = "";
        $scope.selectedPortfolio = "AR";
        $scope.allTeams = {};

        $scope.init = function () {
            $scope.selectedPortfolio = "AR";

            $scope.portfolios = [
                {
                    "id": "AR",
                    "name": "Africa Regions"
                },
                {
                    "id": "CIB",
                    "name": "CIB"
                },
                {
                    "id": "CIBGMT",
                    "name": "CIB Global Markets Technology"
                },
                {
                    "id": "CIBO",
                    "name": "CIB Operations Technology"
                },
                {
                    "id": "CIBRT",
                    "name": "CIB Risk Technology"
                },
                {
                    "id": "CIBTPS",
                    "name": "CIB TPS"
                },
                {
                    "id": "Card",
                    "name": "Card, Payments, GSS, VAF"
                },
                {
                    "id": "CMPLNCE",
                    "name": "Compliance"
                },
                {
                    "id": "CF",
                    "name": "Corporate Functions"
                },
                {
                    "id": "DS",
                    "name": "Data Services"
                },
                {
                    "id": "DC",
                    "name": "Digital Channels"
                },
                {
                    "id": "EWT",
                    "name": "Enterprise-wide Tech Functions"
                },
                {
                    "id": "GRPFIN",
                    "name": "Group Finance"
                },
                {
                    "id": "GRPIOR",
                    "name": "Group IOR"
                },
                {
                    "id": "HCap",
                    "name": "Human Capital"
                },
                {
                    "id": "Security",
                    "name": "IT Security"
                },
                {
                    "id": "Infra",
                    "name": "Infrastructure Services"
                },
                {
                    "id": "MKT",
                    "name": "Marketing"
                },
                {
                    "id": "PBB",
                    "name": "Personal and Business Banking"
                },
                {
                    "id": "W",
                    "name": "Wealth"
                }
            ];

            $scope.allTeams = {
                'AR': [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'Finance'}, {'name': 'GoldenEye'}, {'name': 'Loans and Leasing'},
                    {'name': 'Operations and Statements'}, {'name': 'Payments and Cheque Voucher Processing'},
                    {'name': 'Payments - Squad 1'}, {'name': 'Payments - Squad 2'}, {'name': 'Pricing'},
                    {'name': 'Service Digitisation'}, {'name': 'Statements'}, {'name': 'Transactional'}, {'name': 'Value Exchange'}],
                'Card': [{'name': 'Acquiring - Feature Team'}, {'name': 'Acquiring - Rest of Africa'}, {'name': 'Acquiring - Product'}, {'name': 'Acquiring - Flex'},
                    {'name': 'Chip Centre'}, {'name': 'Diners Auths and Release Compliance'}, {'name': 'Diners Digitalization'}, {'name': 'Diners Transactional'},
                    {'name': 'EMV - Squad 1'}, {'name': 'EMV - Squad 2'}, {'name': 'Issuing - Customer Experience'},
                    {'name': 'Issuing - Transactional Feature Team'}, {'name': 'Issuing - Product Squad 1'}, {'name': 'Issuing - Product Squad 2'},
                    {'name': 'Africa Region Card Issuing'}, {'name': 'Sparrow Component Team'}, {'name': 'Cash Feature Team'}, {'name': 'FASS/GC/COSS'},
                    {'name': 'Generic Switch'}, {'name': 'GOSS and Outsourced Production'},
                    {'name': 'IA - Channel Enablement IA'}, {'name': 'IA - Service and Chatbot IA'}, {'name': 'Cash Services IA'},
                    {'name': 'Card IA'}, {'name': 'Credit IA'}, {'name': 'CRR IA'},
                    {'name': 'Fraud IA'}, {'name': 'EIM IA'}, {'name': 'Liberty IA'},
                    {'name': 'ROA IA'}, {'name': 'Central Finance IA'}, {'name': 'CIB Finance IA'},
                    {'name': 'Payments, Regulatory and Maintenance IA'},
                    {'name': 'Workflow - GOSS'},
                    {'name': 'Auto-Recons Legacy'}, {'name': 'Bulk Payments'}, {'name': 'Emerging Payments'}, {'name': 'Card and Payments DevOps - Easy Trace'},
                    {'name': 'Card and Payments DevOps - MUCC'}, {'name': 'Card and Payments DevOps - Automatic Everything'},
                    {'name': 'IntelliMatch'}, {'name': 'Merchant Solutions Service'}, {'name': 'Money Transfers and ACB'},
                    {'name': 'Online Payments - Squad 1'}, {'name': 'Online Payments - Squad 2'}, {'name': 'Online Payments - Squad 3'},
                    {'name': 'Payment Data'}, {'name': 'Postilion/Base 24 - Squad 1'}, {'name': 'Postilion/Base 24 - Squad 2'},
                    {'name': 'Postilion/Base 24 - Squad 3'}, {'name': 'Remittances (Instant Money)'}, {'name': 'Fleet'},
                    {'name': 'VAF - Squad 1'}, {'name': 'VAF - Squad 2 with Genesis'}, {'name': 'VAF Africa Regions'},
                    {'name': 'VAF Digitisation'}, {'name': 'VAF Modernisation'}, {'name': 'VAF Wholesale Finance'}],
                'CIB': [{'name': 'Finance IT'}, {'name': 'MSDS'}],
                'CIBO': [{'name': 'Africa Regions'}, {'name': 'BaNCS & Sec Lending'}, {'name': 'Client & Data Services'},
                    {'name': 'Engineering Transformation'}, {'name': 'Financial Messaging'}, {'name': 'GMO Confirmations'},
                    {'name': 'GMO Settlements'}, {'name': 'Intelligent Automation (CIB)'}, {'name': 'IPSS Liquidity'},
                    {'name': 'IPSS Settlements'}, {'name': 'JAS'}, {'name': 'Legacy Payments'}, {'name': 'Libra BOP'},
                    {'name': 'Payments'}, {'name': 'Platforms (Payments)'}, {'name': 'Recons'}, {'name': 'SWIFT Industry'},
                    {'name': 'Techie Town'}, {'name': 'Trade'}, {'name': 'Trustees and Clearing'}],
                'CIBRT': [{'name': 'Risk Technology: Cybernetics'}, {'name': 'Risk Technology: Risk Reporting & Analytics'},
                    {'name': 'Risk Technology: Core Credit Services'}, {'name': 'Risk Technology: Operations'}],
                'CIBTPS': [{'name': 'Collections 1'}, {'name': 'Collections 2'}, {'name': 'Foreign Payments'},
                    {'name': 'Local Payments 1'}, {'name': 'Local Payments 2'}, {'name': 'MIS'}, {'name': 'Account Services'},
                    {'name': 'Enhanced Collections'}, {'name': 'Thin Client'}, {'name': 'Platform'},
                    {'name': 'BOL Legacy'}, {'name': 'Host to Host'}, {'name': 'Integration'}, {'name': 'PES'}, {'name': 'Pricing and Billing'},
                    {'name': 'SSA'}, {'name': 'DevOps'}, {'name': 'Specialised Account Services'}],
                'CF': [{"name":"Deal Pricing and ALM"},{"name":"Employee Portal"},{"name":"FLS Team"},{"name":"HC Enablement"},
                    {"name":"HC SAP"},{"name":"IOR"}],
                'CMPLNCE': [{"name":"ML/TF and Sanctions"},{"name":"Surveillance and Reporting"}],
                'DS': [{"name":"AML DevOps"},{"name":"Africa Regions Transformation"},{"name":"Big Data Ingestion"},
                    {"name":"DAM – Platforms"},{"name":"DAM – Engineering"},{"name":"DAM – PBB EIM"},{"name":"DAM –  MDM & RDM"},
                    {"name":"Data Science"},{"name":"Data Warehouse Products"},
                    {"name":"Enterprise BI"},{"name":"Human Capital"},{"name":"Loyalty and Rewards"},
                    {"name":"Regulatory Data"},{"name":"SAS"},{"name":"Wealth"}],
                'DC': [{'name': 'AIMS'}, {'name': 'Card and Emerging Payments'}, {'name': 'Client Side Framework'},
                    {'name': 'Corporate Banking'}, {'name': 'Customer Foundation'}, {'name': 'Data and Analytics'},
                    {'name': 'Digital ID and Entitlements'}, {'name': 'Forex'}, {'name': 'Insurance, Homeloans, VAF, Kids'},
                    {'name': 'Order Management'}, {'name': 'Investments'},
                    {'name': 'Personal and SE - Account Management'}, {'name': 'Personal and SE - Transactional and VAS'},
                    {'name': 'Staff Foundation'}, {'name': 'Staff Web'}, {'name': 'Vikings'},
                    {'name': 'Virtual Banking - Front End'}, {'name': 'Virtual Banking - Squad 2'}, {'name': 'Public Web'}],
                'EWT': [{'name': 'BPM'}, {'name': 'ECM'}, {'name': 'ESB'}, {'name': 'TechLab'}, {'name': 'Tools and Support'}],
                'GRPFIN': [{'name': 'CF Group Finance Central - FBS'}, {'name': 'CF Group Finance - Sub Ledger (PSBL)'}, {'name': 'CF Group Finance - Accounting Rules Engine'},
                    {'name': 'CF Group Finance - TCM (RegCap, ECAP, ICBCS (RCC- application))'},
                    {'name': 'CF Group Finance - ALM'}, {'name': 'CF Group Finance PBB - Bank Analyser'}, {'name': 'CF Group Finance PBB - PMT'},
                    {'name': 'CF Group Finance PBB - PBT'}, {'name': 'CF Group Finance PBB - Measurements'}, {'name': 'CF Group Finance CIB - Fusion'},
                    {'name': 'CF Group Finance CIB - Entry Warehouse'}, {'name': 'CF Group Finance CIB - Plato'},
                    {'name': 'CF Group Finance CIB - PMREC'}, {'name': 'CF Group Finance Africa Regions (GBM, TAX, Planning, Reporting, SAP ECC (GL))'},
                    {'name': 'CF Group Finance - Procurement'}],
                'GRPIOR': [{'name': 'GR Data FT'}, {'name': 'GR Workflow FT'}, {'name': 'GR Systems FT'},
                    {'name': 'GR FLS FT'}],
                'HCap': [{"name":"CF HC ENABLEMENT FT IT - Cloud Solutions Support"},
                    {"name":"CF HC ENABLEMENT FT IT - People Fluent"},{"name":"CF HC SAP FT IT - SAP HC"},
                    {"name":"CF HC SAP FT IT - SAP HC ESS/MSS"},{"name":"CF HC SAP FT IT - SAP HC Interfaces"},
                    {"name":"CF HC SAP FT IT - SAP HC Mobile Apps"}],
                'Infra': [{'name': 'Capacity Management'}, {'name': 'CICS'}, {'name': 'Data Centre – Africa Region'}, {'name': 'Data Centre – DCAT2'},
                    {'name': 'Data Centre – DCIRM'}, {'name': 'DB2/Adabas'}, {'name': 'J2E'},
                    {'name': 'End User Computing'}, {'name': 'Enterprise Systems Management'}, {'name': 'Facility Management'},
                    {'name': 'Mainframe – Integration'}, {'name': 'Mainframe – Storage'},
                    {'name': 'Mainframe – zOS'}, {'name': 'Middleware – Control Direct and MQ'},
                    {'name': 'Middleware – TWS'}, {'name': 'Middleware – Control M / GCE / RMS and report viewer'},
                    {'name': 'Linux'}, {'name': 'Network – Support'}, {'name': 'Network – Deployment'}, {'name': 'Open Systems Storage and Backup'},
                    {'name': 'Oracle'}, {'name': 'Platform – Solaris'}, {'name': 'Platform – AIX'}, {'name': 'Platform Engineering – Cloud'},
                    {'name': 'Platform Engineering – Automation'}, {'name': 'SAP Front Office'}, {'name': 'SAP Back Office'},
                    {'name': 'Storage'}, {'name': 'Sybase and DB2'}, {'name': 'SQL'}, {'name': 'TWS'}, {'name': 'Unified Communications'},
                    {'name': 'Windows'}],
                'MKT': [{'name': 'Employee Portal'}],
                'PBB': [{'name': 'Account Origination'}, {'name': 'AMS 1'}, {'name': 'AMS 2'}, {'name': 'AMS 3 - Unsecured Lending'},
                    {'name': 'AO - Unsecured Lending'}, {'name': 'ATM - Squad 1'}, {'name': 'ATM - Squad 2'},
                    {'name': 'ATM - Squad 3'}, {'name': 'ATM - Squad 4'}, {'name': 'BPM Non-federated'}, {'name': 'Branch Accounting'},
                    {'name': 'CDI/RSS'}, {'name': 'Natural and .NET Applications'}, {'name': 'Credit Account Maintenance Feature Team'},
                    {'name': 'Credit Collections Feature Team'}, {'name': 'Credit Account Origination Feature Team'},
                    {'name': 'Credit Collateral Feature Team'}, {'name': 'E3 Systems Feature Team'},
                    {'name': 'Customer Insights and Analytics'}, {'name': 'EIM Data Change'}, {'name': 'EIM Data Remediation'},
                    {'name': 'Banking Statements'}, {'name': 'Registration and Login'}, {'name': 'SEO Payments'},
                    {'name': 'SEO Profile Management'}, {'name': 'SEO Registration'}, {'name': 'USSD'},
                    {'name': 'Application Performance Monitoring'}, {'name': 'Aris'}, {'name': 'Business Applications'},
                    {'name': 'CCC'}, {'name': 'Customer Integration and Maintenance'}, {'name': 'e-Commerce'}, {'name': 'JSOM'},
                    {'name': 'Customer 1st and Ciboodle - Squad 1'}, {'name': 'Customer 1st and Ciboodle - Squad 2'},
                    {'name': 'eSignature / OFV'}, {'name': 'IBR'}, {'name': 'Payments'}, {'name': 'Payments - Unsecured Lending'},
                    {'name': 'NDS - Squad 1'}, {'name': 'NDS - Squad 2'}, {'name': 'NDS - Squad 3'},
                    {'name': 'Homeloans - Squad 1'}, {'name': 'Homeloans - Squad 2'}, {'name': 'Platform Team (OBB 2)'},
                    {'name': 'Product and Pricing'}, {'name': 'SAP User Prov, Org, Auth'}, {'name': 'System Engineering Team'},
                    {'name': 'Instant Money - Digital Messaging'}, {'name': 'Instant Money - Transit'}, {'name': 'Instant Money - VAS'},
                    {'name': 'Instant Money - Wallets'}, {'name': 'Statements'}, {'name': 'Unsecured Lending'}, {'name': 'Value / Payments Team (OBB 1)'}],
                'Security': [{'name': 'Test Security Squad'}],
                'W': [{"name":"SBFC Feature Team"},{"name":"Standard Bank Insurance Brokers"},{"name":"Standard Insurance Limited"},{"name":"WIN SAP FT"},
                    {"name":"Wealth International"},{"name":"Wealth and Investments and Fiduciary"}],
                'CIBGMT': [{"name":"Alchemy CIB"},{"name":"Alchemy Liberty"},{"name":"Equities Support"},{"name":"FEDS"},
                    {"name":"Front S A"},{"name":"FX Support"},{"name":"GMT Analytics"},{"name":"Hoops"},{"name":"Market Data"},
                    {"name":"Online Share Trading"},{"name":"Murex EQD"},{"name":"Murex GTS S A"},{"name":"Murex Core"},{"name":"Murex Collateral"},
                    {"name":"Murex VaR"},{"name":"Calypso South Africa"},{"name":"Calypso Africa Regions"},{"name":"Calypso ICBC"}]
            };

            $scope.getTeams();
        };

        $scope.getTeams = function(){
            $scope.teams = $scope.allTeams[$scope.selectedPortfolio];
        };

        $scope.getPortfolioName = function(portfolioKey) {
            var portfolioName = "";
            for (var portfolioId in $scope.portfolios) {
                if ($scope.portfolios[portfolioId].id === portfolioKey) {
                    portfolioName = $scope.portfolios[portfolioId].name;
                }
            }

            return portfolioName;
        };

        $scope.updateTeams = function(){
            $scope.selectedTeam = "";
            $scope.getTeams();
        };

        $scope.saveTeamName = function(){
            if($scope.selectedTeam === ""){
                $rootScope.hasError = true;
                $location.path('/select-team');
            }
            else {
                $rootScope.hasError = false;
                $rootScope.teamName = $scope.selectedTeam;
                $rootScope.selectedPortfolioName = $scope.getPortfolioName($scope.selectedPortfolio);
                RetrieveAssessment.getAssessment($scope.selectedTeam).then(function(response){
                    var data = response.data;
                    $rootScope.assessments = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {};
                    $location.path('/strategy');
                });
            }
        }

    }])

    .factory('RetrieveAssessment', ['$http', function ($http) {
        return {
            getAssessment: function (teamName) {
                return $http({
                    url: "http://178.62.75.15:8080/assessment?teamName="+teamName,
                    method: "GET"
                });
            }
        }
    }]);

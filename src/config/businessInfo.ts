/**
 * 14 Star Engineering — Central Business Configuration
 *
 * All business details, verified contact channels, and pre-launch verification
 * flags are centralized here. Modify this file to update contact details,
 * confirm reported statistics, or adjust owner verification statuses.
 */

export interface VerificationItem {
  id: string;
  category: 'Contact' | 'Clients' | 'Licences' | 'Factory' | 'Statistics';
  label: string;
  currentValue: string;
  isConfirmedByOwner: boolean;
  notes: string;
}

export const BUSINESS_INFO = {
  // Brand Identity
  brandName: '14 Star Engineering',
  tagline: 'Tanker Manufacturing & Fabrication',
  taglineHindi: 'टैंकर विनिर्माण और फैब्रिकेशन समाधान',

  // Leadership & Qualification
  contactPerson: 'Talib Naqvi (Ali Ahsan Naqvi)',
  qualification: 'B.E. Mechanical',

  // Reported Experience & Deliveries (subject to final owner sign-off)
  experienceYears: '5+',
  experienceFullNote: 'Approximately 5–6 years in tanker manufacturing & heavy fabrication',
  reportedDeliveries: '250+',
  reportedDeliveriesLabel: 'Tankers Delivered',

  // Verified ISO 9001:2015 Certification
  isoCertification: {
    standard: 'ISO 9001:2015',
    title: 'Quality Management Systems (QMS)',
    registeredEntity: 'FOURTEEN STAR ENGINEERING',
    certificateNo: 'IN/36518505/5698',
    scope: 'MANUFACTURER AND FABRICATION OF PETROLEUM TANK AND STORAGE M. S TANK, S. S TANK.',
    issueDate: '03/06/2025',
    expiryDate: '02/06/2028',
    surveillance1: '03/05/2026',
    surveillance2: '03/05/2027',
    certificationBody: 'ICV ASSESSMENTS PVT. LTD.',
    accreditation: 'IAF Multilateral Recognition Arrangement & EGAC Accredited (CAB #011907A)',
    certificatePdfUrl: '/docs/iso-9001-certificate.pdf',
    certificateImageUrl: '/images/iso-9001-certificate.jpg',
    certificateHighResUrl: '/images/iso-9001-certificate-page-1.jpg',
  },

  // Factory Location & Physical Address
  factory: {
    name: 'Jay Sai Warehouse',
    street: 'Survey No. 43/26B Road, in front of Karan Compound',
    post: 'Post: Dahisar, Village: Bhandarli',
    cityPin: 'Thane 400 612',
    stateCountry: 'Maharashtra, India',
    fullAddress:
      'Jay Sai Warehouse, Survey No. 43/26B Road, in front of Karan Compound, Post: Dahisar, Village: Bhandarli, Thane 400 612, Maharashtra',
    // Factory location directions link configured for Bhandarli, Thane industrial area.
    // Exact GPS coordinates / Google Business Profile pin requires owner confirmation.
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Jay+Sai+Warehouse+Bhandarli+Thane+400612',
    isGpsPinConfirmed: false,
  },

  // Contact Channels
  contact: {
    phone1: '+91 7777 054 109',
    phone1Raw: '+917777054109',
    phone2: '+91 7777 037 383',
    phone2Raw: '+917777037383',
    email: 'engineeringfourteenstar@gmail.com',

    // Configurable WhatsApp Integration:
    // Uses Phone 1 by default, but flagged as requiring explicit owner confirmation
    // before live publication as the designated business WhatsApp channel.
    whatsAppNumberRaw: '917777054109',
    whatsAppDisplay: '+91 7777 054 109',
    isWhatsAppConfirmed: false,
    whatsAppVerificationNote:
      'WhatsApp number is pre-configured to Phone 1 (+91 7777 054 109). Confirm with Talib Naqvi whether this number is active on WhatsApp Business.',
  },

  // Reported Oil-Industry Clients (Owner-provided list; subject to authorization for commercial logo display)
  reportedOilClients: [
    { name: 'HPCL', fullName: 'Hindustan Petroleum Corporation Limited' },
    { name: 'BPCL', fullName: 'Bharat Petroleum Corporation Limited' },
    { name: 'Jio-bp', fullName: 'Reliance BP Mobility Limited (Jio-bp)' },
    { name: 'Nayara Energy', fullName: 'Nayara Energy Limited' },
    { name: 'IOCL', fullName: 'Indian Oil Corporation Limited' },
  ],

  // Reported Transport Partners (Transporters & Fleet Owners serviced per company records)
  reportedTransportPartners: [
    { name: 'Manisha Roadline', type: 'Transport Fleet' },
    { name: 'Anamika Roadline', type: 'Transport Fleet' },
    { name: 'R One Roadline', type: 'Transport Fleet' },
    { name: 'Shyam Roadline', type: 'Transport Fleet' },
    { name: 'Anita Roadline', type: 'Transport Fleet' },
    { name: 'Ashish Roadline', type: 'Transport Fleet' },
    { name: 'Simran Roadways', type: 'Logistics Operator' },
    { name: 'A K Roadways', type: 'Logistics Operator' },
    { name: 'Swastik Logistics', type: 'Petroleum Logistics' },
    { name: 'Yadav Roadways', type: 'Fleet Transporter' },
  ],

  // Statutory Licences & Government Authorisations
  // Clean compliance badges displayed without sensitive registration numbers
  licences: [
    {
      id: 'peso-explosive',
      title: 'Explosive Licence',
      badge: '[PESO Approved]',
      isPesoApproved: true,
      scope: 'Petroleum Road Tanker Carriage & Safety Compliance',
      status: 'PESO Approved',
      description: 'Approved by Petroleum and Explosives Safety Organization (PESO), Government of India, for the statutory carriage and hazardous cargo transport of petroleum road tankers.',
      requiresVerification: false,
    },
    {
      id: 'form-17',
      title: 'Form 17',
      badge: 'CMVR Compliant',
      isPesoApproved: false,
      scope: 'Road Tanker Body Fabrication & Vehicle Modification Record',
      status: 'Statutory Record',
      description: 'Motor vehicle rules statutory fabrication and chassis mounting authorization certificate.',
      requiresVerification: false,
    },
    {
      id: 'form-22a',
      title: 'Form 22A',
      badge: 'CMVR Rule 47(g)',
      isPesoApproved: false,
      scope: 'Initial Road Tanker Compliance Certification by Body Builder',
      status: 'Statutory Record',
      description: 'Road tanker body builder initial compliance certificate issued for transport authority validation.',
      requiresVerification: false,
    },
    {
      id: 'form-22b',
      title: 'Form 22B',
      badge: 'CMVR Endorsement',
      isPesoApproved: false,
      scope: 'Endorsement Certificate for Fabricated Tanker Commercial Transport',
      status: 'Statutory Record',
      description: 'Technical endorsement certificate for commercial transport RTO registration and fitness documentation.',
      requiresVerification: false,
    },
    {
      id: 'gst',
      title: 'GST Registration',
      badge: 'Tax Compliant',
      isPesoApproved: false,
      scope: 'Commercial Taxation & Tax-Invoiced B2B Corporate Contracts',
      status: 'Active Business Entity',
      description: 'Central & State Goods and Services Tax compliance for transparent commercial invoicing across India.',
      requiresVerification: false,
    },
    {
      id: 'udyam',
      title: 'Udyam Aadhaar',
      badge: 'MSME Registered',
      isPesoApproved: false,
      scope: 'Government of India MSME Manufacturing Enterprise',
      status: 'Registered Enterprise',
      description: 'Ministry of Micro, Small & Medium Enterprises (MSME) verified heavy manufacturing unit.',
      requiresVerification: false,
    },
    {
      id: 'ghumasta',
      title: 'Ghumasta Licence',
      badge: 'Municipal Trade',
      isPesoApproved: false,
      scope: 'Maharashtra Shops & Establishments Registration',
      status: 'Municipal Record',
      description: 'Registered industrial business establishment under Maharashtra local municipal regulations.',
      requiresVerification: false,
    },
  ],

  // Internal Launch Verification Checklist
  // Explicitly tracked to prevent publishing unverified claims as absolute facts
  launchChecklist: [
    {
      id: 'chk-whatsapp',
      category: 'Contact',
      label: 'WhatsApp Business Number Confirmation',
      currentValue: '+91 7777 054 109',
      isConfirmedByOwner: false,
      notes: 'Confirm if WhatsApp is active on Phone 1 or Phone 2 before live ads/campaigns.',
    },
    {
      id: 'chk-factory-map',
      category: 'Factory',
      label: 'Google Business Profile / Precise GPS Pin',
      currentValue: 'Jay Sai Warehouse, Bhandarli, Thane 400612',
      isConfirmedByOwner: false,
      notes: 'Acquire precise Google Maps share link from owner for exact factory gate navigation.',
    },
    {
      id: 'chk-clients',
      category: 'Clients',
      label: 'Client Name Mention & Commercial Display Authorisation',
      currentValue: 'HPCL, BPCL, Jio-bp, Nayara Energy, IOCL',
      isConfirmedByOwner: false,
      notes: 'Names displayed strictly as owner-reported client base. Logo assets will be added only upon written confirmation.',
    },
    {
      id: 'chk-deliveries',
      category: 'Statistics',
      label: 'Historical Tanker Delivery Volume (250+ units)',
      currentValue: '250+ tankers delivered',
      isConfirmedByOwner: false,
      notes: 'Reported by owner on visiting card; to be audited against dispatch registry if formal certification is requested.',
    },
    {
      id: 'chk-licence-copies',
      category: 'Licences',
      label: 'Licence Document Copy Verification (Forms 9, 17, 22A, 22B, GST, Udyam, Ghumasta)',
      currentValue: 'Listed as reported on company card',
      isConfirmedByOwner: false,
      notes: 'Badges displayed without exposing registration numbers. Physical copies to be reviewed for expiry dates before live deployment.',
    },
    {
      id: 'chk-email-backend',
      category: 'Contact',
      label: 'Production Form Email Delivery Backend',
      currentValue: 'Direct WhatsApp + client dispatch configured; SMTP/Resend API needed for automated server emails',
      isConfirmedByOwner: false,
      notes: 'Form provides instant WhatsApp quotation route and captures submissions; server email dispatcher requires API key in Vercel environment variables.',
    },
  ] as VerificationItem[],
};

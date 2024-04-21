import Images from "../assets/Images/images"


export const expertise = {
   
    HorseNormalization: {
        id: 1,
        text: 'تطبيع خيل',
        value: 'Horse normalization',  
    },
    WesternRiding: {
        id: 2,
        text: 'ركوب غربي',
        value: 'Western riding',  
    },
    AdvancedHorseTraining: {
        id: 3,
        text: ' تدريب سبق خيل (ركوب غربي)',
        value: 'Advanced horse training (western riding)',  
    },
    HorseTrainingForCamels: {
        id: 4,
        text: ' تدريب خيل للجمال',
        value: ' Horse training for camels',  
    },
    HorseHouse: {
        id: 5,
        text: ' بيت خيل ',
        value: 'Horse house',  
    },
    SellingHorses: {
        id: 6,
        text: 'بيع خيول',
        value: 'Selling horses',  
    },
    TherapeuticHorseRiding: {
        id: 7,
        text: 'ركوب خيل علاجي',
        value: 'Therapeutic horse riding',  
    },
    BenefitsOfHorseRiding: {
        id: 8,
        text: 'فوائد ركوب الخيل',
        value: ' Benefits of horse riding',  
    },
    hourseTrip: {
        id: 9,
        text: 'رحله مع خيل ',
        value: 'hourse trip',  
    },
    SchoolEventsReservationInquiries: {
        id: 10,
        text: ' فعاليات مدرسيه استفسارات للحجز',
        value: 'School events, reservation inquiries',  
    },
}

export const Servises = [
    {
        text: 'تطبيع خيل',
        data: expertise.HorseNormalization,
        img: Images.horse(),
        expertise: ''
    },
    {
        text: 'ركوب غربي',
        data: expertise.WesternRiding,
        img: Images.game(),
    },
    {
        text: ' تدريب سبق خيل (ركوب غربي)',
        data: expertise.AdvancedHorseTraining,
        img: Images.horse2(),
    },
    {
        text: ' تدريب خيل للجمال',
        data: expertise.HorseTrainingForCamels,
        img: Images.cup(),
    },
    {
        text: ' بيت خيل ',
        data: expertise.HorseHouse,
        img: Images.horseshoe(),
    },
    {
        text: 'بيع خيول',
        data: expertise.SellingHorses,
        img: Images.horse7(),
    },
    {
        text: 'ركوب خيل علاجي',
        data: expertise.TherapeuticHorseRiding,
        img: Images.horseriding(),
    },
    {
        text: 'فوائد ركوب الخيل',
        data: expertise.BenefitsOfHorseRiding,
        img: Images.horse4(),
    },
    {
        text: 'رحله مع خيل ',
        data: expertise.hourseTrip,
        img: Images.horses3(),
    },
    {
        text: ' فعاليات مدرسيه استفسارات للحجز',
        data: expertise.SchoolEventsReservationInquiries,
        img: Images.sports(),
    },
]




export const coachs = [
    {
        name: 'محمد1 ',
        img: Images.horse(),
        avatar: " " ,
        qualifications: ['اا', 'مم'], //shehadat 
        expertise: [expertise.hourseTrip , expertise.BenefitsOfHorseRiding, expertise.AdvancedHorseTraining,expertise.HorseHouse,expertise.HorseNormalization,expertise.HorseTrainingForCamels,expertise.SchoolEventsReservationInquiries,expertise.SellingHorses,expertise.TherapeuticHorseRiding,expertise.WesternRiding,] // tadreeb
        
    },
    {
        name: 'محمد2',
        img: Images.horse(),
        avatar: '',
        qualifications: ['', ''], //shehadat 
        expertise: [expertise.hourseTrip , expertise.BenefitsOfHorseRiding, expertise.AdvancedHorseTraining,expertise.HorseHouse,expertise.HorseNormalization,expertise.HorseTrainingForCamels,expertise.SchoolEventsReservationInquiries,expertise.SellingHorses,expertise.TherapeuticHorseRiding,expertise.WesternRiding,] // tadreeb
    },
    {
        name: 'محمد3',
        img: Images.horse(),
        avatar: '',
        qualifications: ['', ''], //shehadat 
        expertise: [expertise.hourseTrip , expertise.BenefitsOfHorseRiding, expertise.AdvancedHorseTraining,expertise.HorseHouse,expertise.HorseNormalization,expertise.HorseTrainingForCamels,expertise.SchoolEventsReservationInquiries,expertise.SellingHorses,expertise.TherapeuticHorseRiding,expertise.WesternRiding,] ,  // tadreeb
    },
    {
        name: 'محمد4',
        img: Images.horse(),
        avatar: '',
        qualifications: ['', ''], //shehadat 
        expertise: [expertise.hourseTrip , expertise.BenefitsOfHorseRiding, expertise.AdvancedHorseTraining,expertise.HorseHouse,expertise.HorseNormalization,expertise.HorseTrainingForCamels,expertise.SchoolEventsReservationInquiries,expertise.SellingHorses,expertise.TherapeuticHorseRiding,expertise.WesternRiding,] // tadreeb
    },
    {
        name: 'محمد5',
        img: Images.horse(),
        avatar: '',
        qualifications: ['', ''], //shehadat 
        expertise: [expertise.hourseTrip , expertise.BenefitsOfHorseRiding, expertise.AdvancedHorseTraining,expertise.HorseHouse,expertise.HorseNormalization,expertise.HorseTrainingForCamels,expertise.SchoolEventsReservationInquiries,expertise.SellingHorses,expertise.TherapeuticHorseRiding,expertise.WesternRiding,] // tadreeb
    },
    {
        name: 'محمد6',
        img: Images.horse(),
        avatar: '',
        qualifications: ['', ''], //shehadat 
        expertise: [expertise.hourseTrip , expertise.BenefitsOfHorseRiding, expertise.AdvancedHorseTraining,expertise.HorseHouse,expertise.HorseNormalization,expertise.HorseTrainingForCamels,expertise.SchoolEventsReservationInquiries,expertise.SellingHorses,expertise.TherapeuticHorseRiding,expertise.WesternRiding,] // tadreeb
    },
    {
        name: 'محمد7',
        img: Images.horse(),
        avatar: '',
        qualifications: ['', ''], //shehadat 
        expertise: [expertise.hourseTrip , expertise.BenefitsOfHorseRiding, expertise.AdvancedHorseTraining,expertise.HorseHouse,expertise.HorseNormalization,expertise.HorseTrainingForCamels,expertise.SchoolEventsReservationInquiries,expertise.SellingHorses,expertise.TherapeuticHorseRiding,expertise.WesternRiding,] // tadreeb
    },
] 
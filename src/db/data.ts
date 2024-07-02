//svg
import department1 from "../assets/svg/departments/Container.svg";
import department2 from "../assets/svg/departments/Container (1).svg";
import department3 from "../assets/svg/departments/Container (2).svg";
import department4 from "../assets/svg/departments/Container (3).svg";
import department5 from "../assets/svg/departments/Container (4).svg";
import department6 from "../assets/svg/departments/Container (5).svg";
import department7 from "../assets/svg/departments/Container (6).svg";
import department8 from "../assets/svg/departments/Container (7).svg";
import department9 from "../assets/svg/departments/Container (8).svg";
import department10 from "../assets/svg/departments/Container (9).svg";
import department11 from "../assets/svg/departments/Container (10).svg";
import department12 from "../assets/svg/departments/Container (11).svg";
import department13 from "../assets/svg/departments/Container (12).svg";
import department14 from "../assets/svg/departments/Container (13).svg";
import department15 from "../assets/svg/departments/Container (14).svg";

//img
import symbol from "../assets/img/useful-links/002.png";
import datagov from "../assets/img/useful-links/003.png";
import lex from "../assets/img/useful-links/004.png";
import idgov from "../assets/img/useful-links/009.png";
import strategy from "../assets/img/useful-links/007.png";
import csec from "../assets/img/useful-links/005.png";
import ddgov from "../assets/img/useful-links/010.png";
import vacancy from "../assets/img/useful-links/008.png";

export interface Nav {
  title: string;
  subtitle: Array<string>;
}

export const NavArray: Nav[] = [
  {
    title: "Хокимият",
    subtitle: [
      "О городе нукус",
      "Структура",
      "Руководство",
      "Отделы",
      "Тендеры",
      "Вакансии",
      "Депутаты города Нукус",
      "Список председателей схода граждана населения",
    ],
  },
  {
    title: "Деятельность",
    subtitle: ["Решение и приказы", "Отчеты"],
  },
  {
    title: "  Интерактивные услуги",
    subtitle: [
      "Статистическая и аналитическая информация",
      "Список оказываемых государственных услуг",
      "Виртуальная приёмная",
      "Обращения физических и юридических лиц",
      "Малый бизнес и предпринимательство",
    ],
  },
  {
    title: "Открытые данные",
    subtitle: [
      "Открытие данные",
      "Открытые данные на основании УП-6247",
      "ОБ ОБЕСПЕЧЕНИИ ОТКРЫТОСТИ БЮДЖЕТНОГО ПРОЦЕССА НА ОСНОВАНИИ 3299",
    ],
  },
  {
    title: "Пресс Служба",
    subtitle: [
      "Пресс-служба",
      "Человеческое достоинство",
      "фотогалерея",
      "Новости",
    ],
  },
  {
    title: " Борьба с коррупцией",
    subtitle: [
      "Закон о противодействии коррупции",
      "Информации по Борьба с коррупцией",
      "Правила поведения сотрудников",
      "Внутренний порядок работы администрации",
      "Обращение",
    ],
  },
];

export const DEPARTMENTS_ARRAY = [
  {
    title: "ОБРАЗОВАНИЕ И ИННОВАЦИИ",
    svg: department1,
  },
  {
    title: "СОЦИАЛЬНАЯ ЗАЩИТА И ЗАНЯТОСТЬ",
    svg: department2,
  },
  {
    title: "ОКРУЖАЮЩАЯ СРЕДА",
    svg: department3,
  },
  {
    title: "ЗДРАВООХРАНЕНИЕ",
    svg: department4,
  },
  {
    title: "ПРАВО И ЮСТИЦИЯ",
    svg: department5,
  },
  {
    title: "ЭКОНОМИКА И ФИНАНСЫ",
    svg: department6,
  },
  {
    title: "Молодежь",
    svg: department7,
  },
  {
    title: "ЦИФРОВЫЕ ТЕХНОЛОГИИ И ТРАНСПОРТ",
    svg: department8,
  },
  {
    title: "СТРОИТЕЛЬСТВО И ЖКХ",
    svg: department9,
  },
  {
    title: "Спорт",
    svg: department10,
  },
  {
    title: "СЕЛЬСКОЕ И ВОДНОЕ ХОЗЯЙСТВО",
    svg: department11,
  },
  {
    title: "ИНВЕСТИЦИИ, ПРОМЫШЛЕННОСТЬ И ТОРГОВЛЯ",
    svg: department12,
  },
  {
    title: "ТУРИЗМ И КУЛЬТУРА",
    svg: department13,
  },
  {
    title: "ЭНЕРГЕТИКА",
    svg: department14,
  },
  {
    title: "РЕГИОНАЛЬНОЕ РАЗВИТИЕ",
    svg: department15,
  },
];

export const USEFUL_LINKS = [
  {
    img: symbol,
    title: "Официальный веб-сайт ПрезидентаРеспублики Узбекистан ",
    link_text: "www.president.uz",
  },
  {
    img: symbol,
    title: "Олий Мажлиса Республики Узбекистан",
    link_text: "www.parliament.gov.uz",
  },
  {
    img: symbol,
    title: "Сенат Олий Мажлиса Республики Узбекистан",
    link_text: "www.senat.uz",
  },
  {
    img: symbol,
    title: "Жокаргы Кенес Республики Каракалпакстан",
    link_text: "www.joqargikenes.uz",
  },
  {
    img: datagov,
    title: "Портал открытых данных Республики Узбекистан",
    link_text: "www.data.gov.uz",
  },
  {
    img: lex,
    title: "Национальная база данных законодательства Республики Узбекистан",
    link_text: "www.lex.uz",
  },
  {
    img: idgov,
    title: "Единая система идентификации",
    link_text: "www.id.gov.uz",
  },
  {
    img: strategy,
    title: "Стратегия действий",
    link_text: "www.strategy.gov.uz",
  },
  {
    img: csec,
    title: "Государственное унитарное предприятие «Центр кибербезопасности»",
    link_text: "www.csec.uz",
  },
  {
    img: ddgov,
    title: "Портал государственных программ Республики Узбекистан",
    link_text: "www.dd.gov.uz",
  },
  {
    img: vacancy,
    title: "Eдиный открытый портал вакансий",
    link_text: "www.vacancy.argos.uz",
  },
  {
    img: symbol,
    title: "Обсуждение нормативно-правовых актов Республики Узбекистан",
    link_text: "www.regulation.gov.uz",
  },
];

export interface NewsItem {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Assemblée générale de l'association - Septembre 2025",
    href: '#',
    description:
      "Retour sur notre assemblée générale annuelle et les décisions prises pour l'avenir de l'association.",
    date: '15 Septembre 2025',
    datetime: '2025-09-15',
  },
  {
    id: 2,
    title: 'Maintenance terminée - Nouvelle version du site',
    href: '#',
    description:
      'Découvrez les nouvelles fonctionnalités et améliorations apportées lors de la dernière maintenance de notre plateforme.',
    date: '30 Juillet 2025',
    datetime: '2025-07-30',
  },
];

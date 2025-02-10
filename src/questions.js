export const questions = {
    easy: [
        //{ question: "Quelle est cette forme ?", options: ["Carré", "Cercle", "Triangle"], answer: "Carré", image: "square.jpg" }, // test avec image
        { 
            question: "Que représente le 'S' dans SOLID ?", 
            options: [
                "A) Single Responsibility Principle", 
                "B) Systematic Design Principle", 
                "C) Software Reliability Principle", 
                "D) Strong Encapsulation Principle"
            ], 
            answer: "A" 
        },
        { 
            question: "Que représente le 'O' dans SOLID ?", 
            options: [
                "A) Object-Oriented Principle", 
                "B) Open/Closed Principle", 
                "C) Optimization Principle", 
                "D) Overloading Principle"
            ], 
            answer: "B" 
        },
        { 
            question: "Que représente le 'L' dans SOLID ?", 
            options: [
                "A) Limited Scope Principle", 
                "B) Local Inheritance Principle", 
                "C) Liskov Substitution Principle", 
                "D) Layered Abstraction Principle"
            ], 
            answer: "C" 
        },
        { 
            question: "Que représente le 'I' dans SOLID ?", 
            options: [
                "A) Interface Segregation Principle", 
                "B) Inheritance Safety Principle", 
                "C) Instance Control Principle", 
                "D) Independent Software Principle"
            ], 
            answer: "A" 
        },
        { 
            question: "Que représente le 'D' dans SOLID ?", 
            options: [
                "A) Dependency Inversion Principle", 
                "B) Data Abstraction Principle", 
                "C) Distributed Systems Principle", 
                "D) Dynamic Typing Principle"
            ], 
            answer: "A" 
        },
        { 
            question: "Qu'est-ce que le principe de responsabilité unique ?", 
            options: [
                "A) Une classe doit avoir plus d'une raison de changer.", 
                "B) Une classe doit avoir une seule raison de changer.", 
                "C) Une classe doit être responsable de plusieurs tâches.", 
                "D) Une classe doit être indépendante des autres classes."
            ], 
            answer: "B" 
        },
        { 
            question: "Quel est le but principal du principe de l'ouverture/fermeture (Open/Closed Principle) ?", 
            options: [
                "A) Les classes doivent être ouvertes à la modification.", 
                "B) Les classes doivent être fermées à l'extension.", 
                "C) Les classes doivent être ouvertes à l'extension mais fermées à la modification.", 
                "D) Les classes doivent être fermées à la modification et à l'extension."
            ], 
            answer: "C" 
        },
        { 
            question: "Quel principe SOLID stipule qu'une classe doit être ouverte à l'extension mais fermée à la modification ?", 
            options: [
                "A) Principe de responsabilité unique", 
                "B) Principe de l'ouverture/fermeture", 
                "C) Principe de substitution de Liskov", 
                "D) Principe de ségrégation des interfaces"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel principe encourage à utiliser des interfaces spécifiques plutôt qu'une interface générale ?", 
            options: [
                "A) Principe de l'ouverture/fermeture", 
                "B) Principe de substitution de Liskov", 
                "C) Principe de ségrégation des interfaces", 
                "D) Principe d'inversion des dépendances"
            ], 
            answer: "C" 
        },
        { 
            question: "Pourquoi le principe de responsabilité unique est-il important ?", 
            options: [
                "A) Il simplifie le code en limitant le nombre de classes", 
                "B) Il évite que des classes aient trop de responsabilités", 
                "C) Il empêche d'utiliser des interfaces", 
                "D) Il permet d'avoir une seule classe pour tout gérer"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel principe encourage l'utilisation de l'abstraction plutôt que de dépendre directement de classes concrètes ?", 
            options: [
                "A) Principe de substitution de Liskov", 
                "B) Principe d'inversion des dépendances", 
                "C) Principe de responsabilité unique", 
                "D) Principe de l'ouverture/fermeture"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel est l'objectif principal du principe de substitution de Liskov ?", 
            options: [
                "A) Une classe dérivée doit pouvoir remplacer sa classe mère sans modifier le comportement du programme", 
                "B) Une classe mère ne doit jamais être héritée", 
                "C) Les classes doivent être finales", 
                "D) Une classe fille ne peut pas ajouter de nouvelles fonctionnalités"
            ], 
            answer: "A" 
        },
        { 
            question: "Que signifie le 'I' dans SOLID ?", 
            options: [
                "A) Inversion des dépendances", 
                "B) Interface Segregation Principle", 
                "C) Injection de dépendances", 
                "D) Instanciation dynamique"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel est le principe qui vise à réduire les dépendances entre les modules d'un projet ?", 
            options: [
                "A) Principe de responsabilité unique", 
                "B) Principe d'inversion des dépendances", 
                "C) Principe de substitution de Liskov", 
                "D) Principe de ségrégation des interfaces"
            ], 
            answer: "B" 
        },
        { 
            question: "Pourquoi le principe de ségrégation des interfaces est-il utile ?", 
            options: [
                "A) Il évite aux classes d'implémenter des méthodes inutiles", 
                "B) Il oblige une classe à implémenter toutes les méthodes d'une interface", 
                "C) Il supprime complètement l'utilisation des interfaces", 
                "D) Il interdit l'héritage"
            ], 
            answer: "A" 
        },
        { 
            question: "Le principe d'inversion des dépendances recommande de :", 
            options: [
                "A) Toujours utiliser l'héritage pour structurer le code", 
                "B) Éviter l'utilisation d'interfaces", 
                "C) Rendre les modules de haut niveau indépendants des modules de bas niveau", 
                "D) Dépendre directement des classes concrètes"
            ], 
            answer: "C" 
        },
        { 
            question: "Quel est le principal avantage de l'application des principes SOLID ?", 
            options: [
                "A) Réduire la lisibilité du code", 
                "B) Augmenter la complexité du projet", 
                "C) Améliorer la maintenabilité et la flexibilité du code", 
                "D) Éliminer complètement les erreurs de programmation"
            ], 
            answer: "C" 
        },
        { 
            question: "Pourquoi le principe de responsabilité unique est-il essentiel dans le développement logiciel ?", 
            options: [
                "A) Il permet de regrouper plusieurs fonctionnalités dans une seule classe", 
                "B) Il améliore la testabilité et la maintenance du code", 
                "C) Il empêche d'utiliser des classes abstraites", 
                "D) Il interdit l'héritage multiple"
            ], 
            answer: "B" 
        },
        { 
            question: "Le principe de substitution de Liskov empêche :", 
            options: [
                "A) L'héritage entre classes", 
                "B) Les erreurs causées par une mauvaise utilisation de l'héritage", 
                "C) L'utilisation d'interfaces", 
                "D) La création de classes abstraites"
            ], 
            answer: "B" 
        },
        { 
            question: "Une classe qui viole le principe de responsabilité unique :", 
            options: [
                "A) A plusieurs raisons de changer", 
                "B) Implémente trop d'interfaces", 
                "C) Ne peut pas être instanciée", 
                "D) Utilise une seule méthode"
            ], 
            answer: "A" 
        },
        { 
            question: "Dans SOLID, pourquoi l'Open/Closed Principle est-il crucial ?", 
            options: [
                "A) Il empêche d'ajouter de nouvelles fonctionnalités", 
                "B) Il permet d'étendre le code sans modifier les classes existantes", 
                "C) Il interdit la surcharge de méthodes", 
                "D) Il oblige à tout coder en programmation fonctionnelle"
            ], 
            answer: "B" 
        },
        { 
            question: "Un code qui respecte SOLID est :", 
            options: [
                "A) Facile à modifier et à faire évoluer", 
                "B) Impossible à refactoriser", 
                "C) Moins structuré", 
                "D) Toujours plus rapide à exécuter"
            ], 
            answer: "A" 
        },
        { 
            question: "Que se passe-t-il si une classe viole le principe de substitution de Liskov ?", 
            options: [
                "A) Elle ne peut pas être compilée", 
                "B) Elle peut provoquer des erreurs en remplaçant une classe parent", 
                "C) Elle fonctionne normalement sans problème", 
                "D) Elle devient une classe abstraite"
            ], 
            answer: "B" 
        },
        { 
            question: "Dans un bon design SOLID, les classes doivent :", 
            options: [
                "A) Avoir une seule responsabilité", 
                "B) Être aussi grandes que possible", 
                "C) Tout gérer dans une seule méthode", 
                "D) Toujours hériter d'une autre classe"
            ], 
            answer: "A" 
        },
        { 
            question: "Que signifie “fermé à la modification” dans l'Open/Closed Principle ?", 
            options: [
                "A) Il est impossible de modifier une classe existante", 
                "B) Une classe doit être modifiable uniquement par son créateur", 
                "C) Une classe existante ne doit pas être modifiée directement mais étendue", 
                "D) Une classe doit toujours être ouverte à la modification"
            ], 
            answer: "C" 
        },
        { 
            question: "Le principe de ségrégation des interfaces implique :", 
            options: [
                "A) Que les classes doivent implémenter des interfaces générales", 
                "B) Que les interfaces doivent être adaptées aux besoins spécifiques des classes", 
                "C) Que toutes les classes doivent avoir la même interface", 
                "D) Que les interfaces ne doivent pas contenir plus d'une méthode"
            ], 
            answer: "B" 
        },
        { 
            question: "Que permet d'éviter l'application du principe d'inversion des dépendances ?", 
            options: [
                "A) La dépendance directe aux classes concrètes", 
                "B) L'utilisation des interfaces", 
                "C) L'instanciation dynamique des objets", 
                "D) L'organisation en modules"
            ], 
            answer: "A" 
        },
        { 
            question: "Pourquoi le principe SOLID est-il recommandé ?", 
            options: [
                "A) Pour compliquer le code et empêcher la modification", 
                "B) Pour améliorer la structure et la maintenabilité du code", 
                "C) Pour interdire l'héritage", 
                "D) Pour rendre le code plus difficile à comprendre"
            ], 
            answer: "B" 
        },
        { 
            question: "Une classe qui respecte le Single Responsibility Principle :", 
            options: [
                "A) Effectue une seule tâche spécifique", 
                "B) Gère plusieurs responsabilités", 
                "C) Ne peut pas être instanciée", 
                "D) Contient un grand nombre de méthodes différentes"
            ], 
            answer: "A" 
        }
    ],    
    medium: [
        { question: "Ut enim ad minim veniam?", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Quis nostrud exercitation ullamco?", options: ["A", "B", "C"], answer: "B" },
        { question: "Laboris nisi ut aliquip ex ea?", options: ["A", "B"], answer: "A" },
        { question: "Commodo consequat?", options: ["A", "B", "C", "D"], answer: "D" }
    ],
    hard: [
        { question: "Duis aute irure dolor in reprehenderit?", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "In voluptate velit esse cillum?", options: ["A", "B", "C"], answer: "A" },
        { question: "Dolore eu fugiat nulla pariatur?", options: ["A", "B"], answer: "B" },
        { question: "Excepteur sint occaecat cupidatat non?", options: ["A", "B", "C", "D"], answer: "D" }
    ]
};
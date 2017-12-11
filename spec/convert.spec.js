describe('Test des parametres de la fonction', function() {
    
    it('la fonction doit prendre 3 parametres', function() {
        expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
    it('les 3 parametres doivent etre du bon type', function() {
        expect(convertisseur('USD', 'A', 'EUR')).toBe(null);
        expect(convertisseur('1', '1', 'EUR')).toBe(null);
        expect(convertisseur('USD', '1', '1')).toBe(null);
    });

});

describe('Test resultats de la fonction', function() {
    
    it('doit convertir des USD dans les autres monnaies', function() {
        expect(convertisseur('USD', 1, 'EUR')).toBe(0.84);
        expect(convertisseur('USD', 1, 'NZD')).toBe(1.45);
        expect(convertisseur('USD', 1, 'KRW')).toBe(1086);
    });
    
    it('doit convertir des EUR dans les autres monnaies', function() {
        expect(convertisseur('EUR', 0.84, 'USD')).toBe(1);
        expect(convertisseur('EUR', 0.84, 'NZD')).toBe(1.45);
        expect(convertisseur('EUR', 0.84, 'KRW')).toBe(1086);
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
        expect(convertisseur('KRW', 1086, 'EUR')).toBe(0.84);
        expect(convertisseur('KRW', 1086, 'NZD')).toBe(1.45);
        expect(convertisseur('KRW', 1086, 'USD')).toBe(1);
    });


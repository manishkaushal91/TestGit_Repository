public with sharing class wire_ContactDetail {


    @AuraEnabled(cacheable = true)
    
    public static list<Contact> findcontacts(String searchtext) {

        String str = '%' +searchtext+ '%';
        return [SELECT id,AccountId,name,phone,email FROM Contact where FirstName LIKE :str ];
    }
}

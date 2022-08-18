public with sharing class wireDecorator_fetchRecord {


    @auraEnabled(cacheable = true)
    public static list<Contact> getConList() {
        return [SELECT Id,LastName,FirstName,phone,email FROM Contact];
    }
}

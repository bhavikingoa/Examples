/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                    
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            closable: false,
                            collapsed: false,
                            title: 'General',
                            items: [
                                {
                                    xtype: 'form',
                                    border: 0,
                                    bodyPadding: 10,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Name'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Last name'
                                        },
                                        {
                                            xtype: 'datefield',
                                            anchor: '100%',
                                            fieldLabel: 'Birthdate '
                                        },
                                        {
                                            xtype: 'textareafield',
                                            anchor: '100%',
                                            fieldLabel: 'Comments'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Groups'
                        },
                        {
                            xtype: 'panel',
                            title: 'Contacts'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});